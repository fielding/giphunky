import React from 'react';
import ReactDOMServer from 'react-dom/server'

import SvgCursor from '../components/SvgCursor';

import gradients from '../constants/gradients';
import backgrounds from '../constants/backgrounds';
const gradientify = Component =>
  class Colorify extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        gradient: gradients['red-orange'],
        background: backgrounds.light,
      };
    }

    componentDidMount() {
      this.selectGradient.addEventListener('click', this.onClickGradient, false);
      this.selectBackground.addEventListener('click', this.onClickBackground, false);
    }

    componentWillUnmount() {
      this.selectGradient.removeEventListener('click', this.onClickGradient, false);
      this.selectBackground.removeEventListener('click', this.onClickBackground, false);
    }

    onClickGradient = e => {
      if (gradients[e.target.id]) {
        this.setState({ gradient: gradients[e.target.id] });
      }
    }

    onClickBackground = e => {
      if (backgrounds[e.target.id]) {
        this.setState({ background: backgrounds[e.target.id] });
      }
    }

    render() {
      const svgCursor64 = encodeURIComponent(ReactDOMServer.renderToStaticMarkup(<SvgCursor size="64" gradient={this.state.gradient} />));
      const svgCursor32 = encodeURIComponent(ReactDOMServer.renderToStaticMarkup(<SvgCursor size="32" gradient={this.state.gradient} />));
      return (
        <div>
          <div id="gradientify">
            <span className="label label-gradient">{this.state.gradient.name}</span>
            <ul id="select-gradient" ref={node => {this.selectGradient = node }}>
              {Object.keys(gradients).map(grad => {
                const style={
                  border: `1px solid ${this.state.background.shadow}`,
                  boxShadow: `3px 3px ${this.state.background.shadow}`,
                  background: `linear-gradient(${gradients[grad].angle}, ${gradients[grad].start} 0%, ${gradients[grad].end} 100%`,
                };
                  return (
                    <li key={grad} id={grad} style={style}></li>
                  );
                })}
              </ul>
              <span className="label label-background">{this.state.background.name}</span>
              <ul id="select-background" ref={node => {this.selectBackground = node }}>
              {Object.keys(backgrounds).map(bg => {
                const style = {
                  backgroundColor: backgrounds[bg].hex,
                  border: `1px solid ${this.state.background.shadow}`,
                  boxShadow: `3px 3px ${this.state.background.shadow}`,
                };
                return (
                  <li key={bg} id={bg} style={style}></li>
                );
              })}
            </ul>
          </div>
          <div
            id="gradient"
            className={"fullscreen " + (this.state.gradient ? this.state.gradient.name : '')}
          >
            <Component
              gradient={this.state.gradient}
              background={this.state.background}
              {...this.props}
            />
          </div>
          <style jsx global>
            {`
              body {
                border-top: 10px solid ${this.state.gradient.start};
                border-image-source: linear-gradient(${this.state.gradient.angle}, ${this.state.gradient.start} 0%, ${this.state.gradient.end} 100%);
                border-image-slice: 10;
                background-color: ${this.state.background.hex};
                color: ${this.state.background.fg};
                height: calc(100vh - 10px);
              }

              body, a, button, input, video, audio:hover {
                cursor: url("data:image/svg+xml,${svgCursor64}") 16 3,
                  url("data:image/svg+xml,${svgCursor64}"),
                  url("data:image/svg+xml,${svgCursor32}"),
                  url("/static/pointer@64h.png"),
                  url("/static/pointer@32h.png"),
                  url("/static/pointer.cur"),
                  auto;
              }
            `}
          </style>
          <style jsx>
            {`
              ul {
                padding-left: 0px;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                width: calc((100vw - 830px )_/ 2);
                z-index: 2;
                justify-content: baseline;
                align-content: center;
                margin-top: 0;
              }

              #select-gradient {
                max-height: calc(100vh - 300px);;
              }

              #select-background {
                height: 70px;
              }

              li {
                display: block;
                height: 16px;
                width: 16px;
                margin: 8px 0 8px 16px;
                flex-grow: 0;
                flex-shrink: 0;
              }

              #gradientify {
                position: absolute;
              }

              .fullscreen {
                min-height: calc(100vh - 10px);
              }

              .label {
                font-weight: 700;
                letter-spacing: .25rem;
                text-transform: uppercase;
                writing-mode: sideways-lr;
                font-size: 14px;
                margin-left:16px;
              }

              @supports not (writing-mode: sideways-lr) {
                .label {
                  writing-mode: vertical-lr
                  text-align: right;
                }
              }

              .label-gradient {
                height: 220px;
              }
              .label-background {
                height: 60px;
              }


            `}
          </style>
        </div>
      );
    }
  }

export default gradientify;

