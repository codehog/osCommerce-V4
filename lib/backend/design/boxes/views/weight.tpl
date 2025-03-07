{use class="Yii"}
<form action="{Yii::getAlias('@web')}/design/box-save" method="post" id="box-save">
  <input type="hidden" name="id" value="{$id}"/>
  <div class="popup-heading">
    {$smarty.const.TEXT_WEIGHT}
  </div>
  <div class="popup-content">




    <div class="tabbable tabbable-custom">
      <ul class="nav nav-tabs">

        <li class="active" data-bs-toggle="tab" data-bs-target="#type"><a>{$smarty.const.TEXT_WEIGHT}</a></li>
        <li data-bs-toggle="tab" data-bs-target="#style"><a>{$smarty.const.HEADING_STYLE}</a></li>
        <li data-bs-toggle="tab" data-bs-target="#align"><a>{$smarty.const.HEADING_WIDGET_ALIGN}</a></li>
        <li data-bs-toggle="tab" data-bs-target="#visibility"><a>{$smarty.const.TEXT_VISIBILITY_ON_PAGES}</a></li>

      </ul>
      <div class="tab-content">
        <div class="tab-pane active menu-list" id="type">


          <div class="setting-row">
            <label for="">{$smarty.const.TABLE_TEXT_NAME}</label>
            <input type="checkbox" name="setting[0][display_label]"{if $settings[0].display_label} checked{/if}>
          </div>
          <div class="setting-row">
            <label for="">{$smarty.const.TEXT_DISPLAY_WEIGHT}</label>
            <select name="setting[0][display_weight]" id="" class="form-control">
              <option value=""{if $settings[0].display_weight == ''} selected{/if}>{$smarty.const.TEXT_DEFAULT}</option>
              <option value="lb"{if $settings[0].display_weight == 'lb'} selected{/if}>{$smarty.const.TEXT_WEIGHT_UNIT_LB}</option>
              <option value="kg"{if $settings[0].display_weight == 'kg'} selected{/if}>{$smarty.const.TEXT_WEIGHT_UNIT_KG}</option>
              <option value="no"{if $settings[0].display_weight == 'no'} selected{/if}>{$smarty.const.TEXT_NONE}</option>
            </select>
          </div>

        </div>
        <div class="tab-pane" id="style">
          {include 'include/style.tpl'}
        </div>
        <div class="tab-pane" id="align">
          {include 'include/align.tpl'}
        </div>
        <div class="tab-pane" id="visibility">
          {include 'include/visibility.tpl'}
        </div>

      </div>
    </div>


  </div>
  <div class="popup-buttons">
    <button type="submit" class="btn btn-primary btn-save">{$smarty.const.IMAGE_SAVE}</button>
    <span class="btn btn-cancel">{$smarty.const.IMAGE_CANCEL}</span>
  </div>
</form>