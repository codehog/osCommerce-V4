{use class="Yii"}
<form action="{Yii::getAlias('@web')}/design/box-save" method="post" id="box-save">
  <input type="hidden" name="id" value="{$id}"/>
  <div class="popup-heading">
    {$smarty.const.TEXT_BESTSELLERS}
  </div>
  <div class="popup-content">



    <div class="tabbable tabbable-custom">
      <ul class="nav nav-tabs">

        <li class="active" data-bs-toggle="tab" data-bs-target="#type"><a>{$smarty.const.HEADING_TYPE}</a></li>
        <li data-bs-toggle="tab" data-bs-target="#product"><a>{$smarty.const.TEXT_PRODUCT_ITEM}</a></li>
        <li data-bs-toggle="tab" data-bs-target="#style"><a>{$smarty.const.HEADING_STYLE}</a></li>
        <li data-bs-toggle="tab" data-bs-target="#align"><a>{$smarty.const.HEADING_WIDGET_ALIGN}</a></li>
        <li data-bs-toggle="tab" data-bs-target="#visibility"><a>{$smarty.const.TEXT_VISIBILITY_ON_PAGES}</a></li>

      </ul>
      <div class="tab-content">
        <div class="tab-pane active menu-list" id="type">


          <div class="setting-row">
            <label for="">{$smarty.const.TEXT_MAXIMUM_COUNTS_BESTSELLERS}</label>
            <input type="text" name="params" class="form-control" value="{$params}"/>
          </div>
          <div class="setting-row">
            <label for="settingsDays">{$smarty.const.TEXT_SOLD_LAST_DAYS}</label>
            <input type="text" name="setting[0][days]" id='settingsDays' class="form-control" value="{$settings[0].days}"/>
          </div>

          <div class="setting-row">
            <label for="">view</label>
            <select name="setting[0][view_as]" id="" class="form-control">
              <option value=""{if $settings[0].view_as == ''} selected{/if}>{$smarty.const.TEXT_SHORT}</option>
              <option value="listing"{if $settings[0].view_as == 'listing'} selected{/if}>{$smarty.const.TEXT_LIKE_LISTING}</option>
              <option value="carousel"{if $settings[0].view_as == 'carousel'} selected{/if}>{$smarty.const.TEXT_CAROUSEL}</option>
            </select>
          </div>

          <div class="setting-row">
            <label for="">{$smarty.const.TEG_FOR_PRODUCTS_NAMES}</label>
            <select name="setting[0][product_names_teg]" id="" class="form-control">
              <option value=""{if $settings[0].product_names_teg == ''} selected{/if}>div</option>
              <option value="h2"{if $settings[0].product_names_teg == 'h2'} selected{/if}>h2</option>
              <option value="h3"{if $settings[0].product_names_teg == 'h3'} selected{/if}>h3</option>
              <option value="h4"{if $settings[0].product_names_teg == 'h4'} selected{/if}>h4</option>
            </select>
          </div>

          <div class="setting-row">
            <label for="">{$smarty.const.TEXT_CATEGORY}</label>
            <select name="setting[0][category]" id="" class=" select2-category select2-offscreen">
              {if !isset($settings[0].category) || $settings[0].category == ''}{$settings[0].category = 0}{/if}
              {foreach $categories as $category}
                <option value="{$category.id}"{if $settings[0].category == $category.id} selected{/if}>{$category.text}</option>
              {/foreach}
            </select>
          </div>

          <div class="setting-row">
            <label for="">{$smarty.const.HIDE_PARENTS_IF_EMPTY}</label>
            <select name="setting[0][hide_parents]" id="" class="form-control">
              <option value=""{if $settings[0].hide_parents == ''} selected{/if}>{$smarty.const.TEXT_NO}</option>
              <option value="1"{if $settings[0].hide_parents == '1'} selected{/if}>1</option>
              <option value="2"{if $settings[0].hide_parents == '2'} selected{/if}>2</option>
              <option value="3"{if $settings[0].hide_parents == '3'} selected{/if}>3</option>
              <option value="4"{if $settings[0].hide_parents == '4'} selected{/if}>4</option>
            </select>
          </div>

          {include 'include/ajax.tpl'}

          {include 'include/col_in_row.tpl'}


        </div>
        <div class="tab-pane" id="product">
          {include 'include/listings-product.tpl'}
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
<script type="text/javascript">
  $(function(){
    $('.select2-category').select2();
  })
</script>