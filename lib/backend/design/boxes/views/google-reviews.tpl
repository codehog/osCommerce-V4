{use class="Yii"}
<form action="{$app->request->baseUrl}/design/box-save" method="post" id="box-save">
    <input type="hidden" name="id" value="{$id}"/>
    <div class="popup-heading">
        {$smarty.const.TEXT_GOOGLE_REVIEWS}
    </div>
    <div class="popup-content box-img">


        <div class="tabbable tabbable-custom">
            <ul class="nav nav-tabs">

                <li class="active" data-bs-toggle="tab" data-bs-target="#text"><a>{$smarty.const.TEXT_GOOGLE_REVIEWS}</a></li>
                <li data-bs-toggle="tab" data-bs-target="#style"><a>{$smarty.const.HEADING_STYLE}</a></li>
                <li data-bs-toggle="tab" data-bs-target="#align"><a>{$smarty.const.HEADING_WIDGET_ALIGN}</a></li>
                <li data-bs-toggle="tab" data-bs-target="#visibility"><a>{$smarty.const.TEXT_VISIBILITY_ON_PAGES}</a></li>

            </ul>
            <div class="tab-content">

                <div class="tab-pane active" id="text">


                    <div class="setting-row">
                        <label for="">{$smarty.const.TEXT_GOOGLE_BADGE_POSITION}</label>
                        <select name="setting[0][position]" id="" class="form-control">
                            <option value="BOTTOM_RIGHT"{if $settings[0].position == 'BOTTOM_RIGHT'} selected{/if}>BOTTOM_RIGHT</option>
                            <option value="BOTTOM_LEFT"{if $settings[0].position == 'BOTTOM_LEFT'} selected{/if}>BOTTOM_LEFT</option>
                            <option value="INLINE"{if $settings[0].position == 'INLINE'} selected{/if}>INLINE</option>
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