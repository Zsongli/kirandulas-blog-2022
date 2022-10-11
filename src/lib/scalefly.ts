import type { TransitionConfig } from "svelte/transition";
import { linear } from "svelte/easing";

export function scaleflyFrom(
    node: HTMLElement,
    {
        delay = 0,
        duration = 400,
        easing = linear,
        scaleX = 0,
        scaleY = 0,
        opacity = 1,
        offsetX = 0,
        offsetY = 0
    }
): TransitionConfig {
    const style = getComputedStyle(node);
    const startOpacity = opacity;
    const targetOpacity = Number(style.opacity);
    const transform = style.transform.replace("none", "");
    const od = targetOpacity * (1 - startOpacity);

    return {
        delay,
        duration,
        easing,
        css: (
            t,
            u // order of transformations matters goddammit
        ) =>
            `transform: ${transform} translate(${u * offsetX}px, ${u * offsetY}px) scale(${1 - (1 - scaleX) * u}, ${1 - (1 - scaleY) * u});
			opacity: ${targetOpacity - od * u}`
    };
}

export function scaleflyTo(
    node: HTMLElement,
    {
        delay = 0,
        duration = 400,
        easing = linear,
        scaleX = 0,
        scaleY = 0,
        opacity = 1,
        offsetX = 0,
        offsetY = 0
    }
): TransitionConfig {
    const style = getComputedStyle(node);
    const targetOpacity = Number(style.opacity);
    const transform = style.transform.replace("none", "");
    const od = targetOpacity * (1 - opacity);

    return {
        delay,
        duration,
        easing,
        css: (t, u) =>
            `transform: ${transform} translate(${u * offsetX}px, ${u * offsetY}px) scale(${1 - u + scaleX * u
            }, ${1 - u + scaleY * u});
			opacity: ${targetOpacity - od * u}`
    };
}
