<div class="sale-holder">
  <div class="image"><img src="{$imageUrl}" alt="{$category.name}"></div>

  <div class="holder-1">

    <div class="ends">
      {if $expiresDate}
      <span class="ends-date-text">{$smarty.const.SALE_ENDS_DATE_TEXT}</span>
      <span class="ends-date">{$expiresDate}</span>
      {/if}
    </div>

    <div class="left">
      {if $expiresDate}
      <span class="left-text-left">{$smarty.const.SALE_LEFT_TEXT_LEFT}</span>

        <span class="left-count box-days">
          <span class="left-count-days">{$days}</span>
          <span class="left-count-days-text">{$smarty.const.SALE_TEXT_DAYS}</span>
      </span>
        <span class="left-count box-hours">
          <span class="left-count-hours">{$hours}</span>
          <span class="left-count-hours-text">{$smarty.const.SALE_TEXT_HOURS}</span>
      </span>
        <span class="left-count box-minutes" style="display: none">
          <span class="left-count-minutes">{$minutes}</span>
          <span class="left-count-minutes-text">{$smarty.const.SALE_TEXT_MINUTES}</span>
      </span>
        <span class="left-count box-seconds" style="display: none">
          <span class="left-count-seconds">{$seconds}</span>
          <span class="left-count-seconds-text">{$smarty.const.SALE_TEXT_SECONDS}</span>
      </span>

      <span class="left-text-right">{$smarty.const.SALE_LEFT_TEXT_RIGHT}</span>
      {/if}
    </div>

    <div class="button"><span class="btn">{$smarty.const.SALE_BUTTON}</span></div>

  </div>

  <div class="holder-2">
    <div class="name">{$category.name}</div>
    <div class="special">
      <span class="special-price-text">{$smarty.const.SALE_TEXT}</span>
      <span class="special-price">{$save}%</span>
      <span class="special-price-off">{$smarty.const.SALE_OFF}</span>
    </div>
  </div>

  <div class="badge">
    <span class="text">{$smarty.const.SALE_TEXT_SAVE}</span>
    <span class="percents">{$save}%</span>
  </div>
</div>

<script type="text/javascript">
    tl('{\frontend\design\Info::themeFile('/js/main.js')}', function(){
        $('#box-{$id}').backCounter();
    });

    tl(function(){
        var boxId = $('#box-{$id}');

        $('.sale-holder', boxId).on('click', function(){
            window.location = '{$link}';
        })
    })
</script>

