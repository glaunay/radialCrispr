import { Component, Prop, Element} from '@stencil/core';
import * as plot from "./radarChart";


@Component({
  tag: 'radial-crispr',
  styleUrl: 'my-component.css',
  shadow: true
})

export class MyComponent {
// *************************** PROPERTY & CONSTRUCTOR ***************************
  @Prop() dic_sgrna: string;
  @Prop() max_occ: number;
  @Element() private element: HTMLElement;
// *************************** LISTEN & EMIT ***************************



// *************************** CLICK ***************************
  chart(dicSgrna: Object) {
    let dt = [];
    dicSgrna["occurences"].forEach(orga => {
      orga["all_ref"].forEach(ref => {
        dt.push({axis: orga.org + ref.ref, value: ref["coords"].length});
      })
    })
    // calcul number levels
    var step = 2;
    var divLevels = this.max_occ/step;
    var nbLevels = Number.isInteger(divLevels) ? (divLevels) : (Math.trunc(divLevels + 1));

		var radarChartOptions = {
		  w: 500,
		  h: 500,
		  margin: {top: 100, right: 100, bottom: 100, left: 100},
		  maxValue: this.max_occ,
		  levels: nbLevels,
		  roundStrokes: true,
      // if number of organism+ref is > 10, no display labels
      labels: (dt.length > 10) ? false : true
		};

		return plot.RadarChart(this.element.shadowRoot, [dt], radarChartOptions);
}

// *************************** DISPLAY ***************************

  render() {
    console.log("rendr called");
    console.log(this.dic_sgrna);
    let sgrna_parsed = JSON.parse(this.dic_sgrna);
    return ([
      <div id="radarChart"></div>,
      <span>
      {this.chart(sgrna_parsed)}
    </span>
    ]);
  }
}
