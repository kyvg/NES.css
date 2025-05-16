export default {
  title: 'Elements/Input',
};

export const Showcase = {
  render: () => `
    <div class="list">
      <div class="nes-field">
        <label for="name_field">Your name</label>
        <input type="text" id="name_field" class="nes-input">
      </div>

      <div class="nes-field is-inline">
        <label for="inline_field">.input.is-success</label>
        <input type="text" id="inline_field" class="nes-input is-secondary" placeholder="NES.css">
      </div>

      <div class="nes-field is-inline">
        <label for="warning_field">.input.is-warning</label>
        <input type="text" id="warning_field" class="nes-input is-warning" placeholder="8bit.css">
      </div>

      <div class="nes-field is-inline">
        <label for="error_field">.input.is-error</label>
        <input type="text" id="error_field" class="nes-input is-danger" placeholder="awesome.css">
      </div>
    </div>
  `,
};
