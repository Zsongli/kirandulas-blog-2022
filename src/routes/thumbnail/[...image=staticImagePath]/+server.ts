/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { RequestEvent } from "./$types";
import Jimp from "jimp";
import Cache from "$lib/cache";

export const cache = new Cache<string, Buffer>((buffer) => buffer.byteLength, 1024 * 1024 * 768); // 768mb, vercel has a 1024mb limit

const size = 480; // shorter side in pixels
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
    image.quality(80);
    if (w > h) image.resize(size * w / h, size, Jimp.RESIZE_BILINEAR);
    else image.resize(size, size * h / w, Jimp.RESIZE_BILINEAR);

    const processedImageBuffer = await image.getBufferAsync(format);
    cache.set(params.image, processedImageBuffer);

    return cachedImage(processedImageBuffer);
}