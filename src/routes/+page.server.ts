import { redirect } from "@sveltejs/kit";

export async function load() {
    // await new Promise((resolve) => setTimeout(resolve, 5000)); // to test page loader
    throw redirect(301, "/nap1");
}