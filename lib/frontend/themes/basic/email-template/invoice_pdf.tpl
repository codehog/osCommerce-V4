{use class="Yii"}
{use class="frontend\design\Block"}
{use class="frontend\design\Info"}
  <style type="text/css">

    div {
      width: auto;
    }
    p {
      padding: 0;
      margin: 0;
    }
    table {
      border: none;
      margin: 0;
      border-collapse: collapse;
    }
    table td {
      padding: 0;
      border: none;
    }
    table.invoice-products td {
      padding: 5px 10px;
      border-bottom: 1px solid #e0e0e0;
    }
    table.invoice-products .invoice-products-headings td {
      font-weight: bold;
      text-transform: uppercase;
      white-space: nowrap;
      font-size: 1.2em;
    }
    table.invoice-totals td {
      padding: 0 10px;
    }
    table.invoice-totals b {
      font-size: 1.3em;
    }
  </style>

  {Block::widget(['name' => 'invoice', 'params' => ['type' => 'invoice', 'params' => $params]])}
