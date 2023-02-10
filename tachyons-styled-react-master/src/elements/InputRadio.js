import styled from "@emotion/styled"
import shouldForwardProp from "@styled-system/should-forward-prop"
import {
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  borders,
  borderColor,
  borderRadius,
  color
} from "styled-system"

const InputRadio = styled('input', { shouldForwardProp })(
  space,
  width,
  display,
  fontSize,
  fontWeight,
  lineHeight,
  color,
  borders,
  borderColor,
  borderRadius,
  {}
)

InputRadio.defaultProps = {
  type: "radio"
}

export default InputRadio
