class NegotiationsView {
    constructor(sel) {
        this.element = document.querySelector(sel);
    }
    update(negotiations) {
        this.element.innerHTML = this.template(negotiations);
    }
    template(negotiations) {
        return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>VOLUME</th>
          </tr>
        </thead>
        <tbody>
        ${negotiations.toArray().map(negotiation => {
            return `<tr>
            <td>${negotiation.date.getDate()}/${negotiation.date.getMonth() + 1}/${negotiation.date.getFullYear()}</td>
            <td>${negotiation.quantity}</td>
            <td>${negotiation.value}</td>
            <td>${negotiation.volume}</td>
  </tr>`;
        }).join('')}
        </tbody>

        <tfoot>
        </tfoot>
      </table>
    `;
    }
}
