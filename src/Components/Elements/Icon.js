/* eslint-disable default-case */
import React, { Component } from 'react';
import styled from "styled-components";

import { colors } from 'Utilities';

export default class Icon extends Component {
  static defaultProps = {
    color: `${colors.custom1}`
  }

  render() {
    switch (this.props.name) {
      case 'close':
        return (
          <SVG
            x="0px"
            y="0px"
            viewBox="0 0 31.11 31.11"
        >
            <Polygon
              fill={this.props.color}
              points="31.11,1.41 29.7,0 15.56,14.14 1.41,0 0,1.41 14.14,15.56 0,29.7 1.41,31.11 15.56,16.97   29.7,31.11 31.11,29.7 16.97,15.56 "
            />
          </SVG>
        );
    }
  }
};

const SVG = styled.svg`
  width: 24px;
  height: 24px;
  enable-background: new 0 0 31.11 31.11;
`;

const Polygon = styled.polygon`
  ${SVG}:hover & {
    fill: ${colors.custom};
  }
`;

