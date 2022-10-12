/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { RequestEvent } from "./$types";
import Jimp from "jimp";
import Cache from "$lib/cache";

const cache = new Cache<string, Buffer>((buffer) => buffer.byteLength, 1024 * 1024 * 768); // 768mb, vercel has a 1024mb limit

const size = 360; // shorter side in pixels
const format = Jimp.MIME_JPEG;

const cachedImage = (image: Buffer) => new Response(image, {
    headers: {
        "Content-Type": format,
        "Cache-Control": "public, max-age=604800, immutable"
    }
});

export async function GET({ params, url }: RequestEvent): Promise<Response> {

    //cache hit
    if (cache.has(params.image)) return cachedImage(cache.get(params.image)!);

    // cache miss
    const res = await fetch(new URL(params.image, url.origin), {
        headers: {
            "Accept": "image/jpeg,image/apng",
        }
    });

    if (!res.ok) return new Response(res.body, { status: res.status });

    // takes a few seconds to process, but it's cached and loaded async on the client
    const image = await Jimp.read(Buffer.from(await (await res.blob()).arrayBuffer()));
    const h = image.getHeight();
    const w = image.getWidth();
    const processedImage = image.resize(size / h * w, size);
    if (h > w) processedImage.rotate(90);

    const processedImageBuffer = await processedImage.getBufferAsync(format);
    cache.set(params.image, processedImageBuffer);

    return cachedImage(processedImageBuffer);
}