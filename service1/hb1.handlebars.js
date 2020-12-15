<ul>
{{#each sampleOrders}}
    <li style="list-style-type: none;"><b>Name:</b> {{this.toyName}}.<b>Price:</b> {{this.price}}.<b> Shop:</b> {{this.shop}}.<b>Quantity:</b> {{this.quantity}}</li>
    {{/each}}
</ul>