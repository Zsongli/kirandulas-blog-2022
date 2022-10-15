import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    const response = await resolve(event);
    console.info(`<${new Date().toLocaleString()}> ${event.request.method} ${new URL(event.request.url).pathname} -> ${response.status} ${response.ok ? "OK" : "ERROR"}`);
    return response;
}