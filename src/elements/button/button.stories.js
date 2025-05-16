export default {
  title: 'Elements/Button',
};

export const Showcase = {
  render: () => `
    <div class="stack">
      <button class="nes-btn">Default</button>
      <button class="nes-btn isPrimary">Primary</button>
      <button class="nes-btn isSecondary">Secondary</button>
      <button class="nes-btn isWarning">Warning</button>
      <button class="nes-btn isDanger">Danger</button>
    </div>
  `,
};

export const Variant = {
    argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'isPrimary', 'isSecondary', 'isWarning', 'isDanger'],
    },
    label: { control: 'text' },

    '--nes-btn-color': { control: 'color' },
    '--nes-btn-bg-color': { control: 'color' },
    '--nes-btn-border-color': { control: 'color' },
    '--nes-btn-border-color-inner': { control: 'color' },
    '--nes-btn-border-width': {
      control: { type: 'text' }, // можно ввести `2px`, `4px`, etc.
    },
    '--nes-btn-border-width-inner': {
      control: { type: 'text' },
    },
  },
  args: {
    variant: 'default',
    label: 'Custom Button',
    '--nes-btn-color': '',
    '--nes-btn-bg-color': '',
    '--nes-btn-border-color': '',
    '--nes-btn-border-color-inner': '',
    '--nes-btn-border-width': '',
    '--nes-btn-border-width-inner': '',
  },
  render: (args) => {
    const {
      variant,
      label,
      ...customProps
    } = args;

    const className = variant === 'default' ? 'nes-btn' : `nes-btn ${variant}`;

    const style = Object.entries(customProps)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, val]) => val !== '')
      .map(([key, val]) => `${key}: ${val}`)
      .join('; ');

    return `<button class="${className}" style="${style}">${label}</button>`;
  },
};
