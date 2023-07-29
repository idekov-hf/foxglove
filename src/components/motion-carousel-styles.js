import { css } from 'lit'

export const styles = css`
  :host {
    display: inline-block;
    overflow: hidden;
    position: relative;
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
    background-color: '#EEE6D4';
  }

  .fit {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .selected {
    top: -100%;
  }

  ::slotted(*) {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
`
