import React from 'react'

//styles
import { css } from '@emotion/react'

//
export default function Checkbox(props) {
  const {
    ref,
    type,
    children,
    id,
    name,
    checked,
    value,
    onChange,
    onClick,
    margin,
    size,
    fontSize,
    fontWeight,
    color,
    gap,
  } = props

  //styled
  const checkStyled = css`
    display: flex;
    align-items: center;
    column-gap: ${gap ? gap : '8px'};
    margin: ${margin};
    cursor: pointer;

    input {
      width: ${size ? size : '18px'};
      height: ${size ? size : '18px'};
      min-width: ${size ? size : '18px'};
      min-height: ${size ? size : '18px'};
      border: 0px solid gainsboro;
      border-radius: 100px;
      appearance: none;
      background-color: #eee;
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
      //
      user-select: none;
      transition: 0.2s ease-in-out;

      &:checked {
        border-color: transparent;
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: #4b5c6c;
        border-radius: 1000px;
      }
    }

    label {
      font-size: ${fontSize ? fontSize : '0.938rem'};
      font-weight: ${fontWeight ? fontWeight : '400'};
      color: ${color ? color : '#555'};
      cursor: pointer;
      white-space: pre-line;

      span {
        white-space: nowrap;
        font-size: 0.813rem;
        color: #999;
      }
    }
  `

  return (
    <div css={checkStyled} ref={ref}>
      <input
        type={type ? type : 'checkbox'}
        name={name ? name : 'check'}
        id={id ? id : 'checkbox'}
        checked={checked}
        value={value}
        onChange={onChange}
        onClick={onClick}
      />
      <label htmlFor={id ? id : 'checkbox'}>{children}</label>
    </div>
  )
}
