import { Component, Prop, Element, State, h } from '@stencil/core';
import * as plot from "../../assets/radarChart";


@Component({
  tag: 'radial-crispr',
  styleUrl: 'my-component.css',
  shadow: true
})

export class MyComponent {
// *************************** PROPERTY & CONSTRUCTOR ***************************
  @Element() private element: HTMLElement;

  @Prop() dic_sgrna: string;
  @Prop() max_occ: number;
  @Prop() diagonal: number;
  @Prop({mutable: true}) step_radial = "2";

  @State() sgrna: string;

// *************************** CLICK ***************************
  chart(dicSgrna: Object) {
    let dt = [];
    dicSgrna["occurences"].forEach(orga => {
      orga["all_ref"].forEach(ref => {
        dt.push({axis: orga.org + "$" + ref.ref, value: ref["coords"].length});
      })
    })
    // calcul number levels
    var divLevels = this.max_occ/Number(this.step_radial);
    var nbLevels = Number.isInteger(divLevels) ? (divLevels) : (Math.trunc(divLevels + 1));

		var radarChartOptions = {
		  w: this.diagonal,
		  h: this.diagonal,
		  margin: {top: 0.1*this.diagonal, right: 0.1*this.diagonal, bottom: 0.1*this.diagonal, left: 0.1*this.diagonal},
		  maxValue: this.max_occ,
		  levels: nbLevels,
		  roundStrokes: true,
      // if number of organism+ref is > 10, no display labels
      // labels: (dt.length > 10) ? false : true
      labels: false
		};

		return plot.RadarChart(this.element.shadowRoot, [dt], radarChartOptions, this.sgrna);
  }

// *************************** DISPLAY ***************************

  render() {
    let sgrna_parsed = JSON.parse(this.dic_sgrna);
    this.sgrna = sgrna_parsed['sequence'];
    return ([
      <div id="radarChart"></div>,
      <span>
      {this.chart(sgrna_parsed)}
    </span>
    ]);
  }
}
