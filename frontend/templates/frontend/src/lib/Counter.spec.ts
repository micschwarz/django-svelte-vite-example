import { describe, it, expect, afterEach } from "vitest";
import { cleanup, fireEvent, render, screen } from '@testing-library/svelte'
import Counter from "./Counter.svelte";

describe('Counter', () => {
    afterEach(() => cleanup())

    it('should mount', async () => {
        const { container } = render(Counter);
        const button = await screen.findByRole('button');

        expect(container).toBeDefined();
        expect(button).toBeDefined();
    });

    it('should mount with counter value of 0', async () => {
        render(Counter);
        const btn = await screen.getByRole('button');
        expect(btn.innerHTML).toContain('0');
    });

    it('should increment', async () => {
        render(Counter);
        const btn = await screen.getByRole('button');
        await fireEvent.click(btn);

        expect(btn.innerHTML).toContain('1');
    });
});