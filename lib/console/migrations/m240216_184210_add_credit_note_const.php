<?php
/**
 * This file is part of osCommerce ecommerce platform.
 * osCommerce the ecommerce
 *
 * @link https://www.oscommerce.com
 * @copyright Copyright (c) 2000-2022 osCommerce LTD
 *
 * Released under the GNU General Public License
 * For the full copyright and license information, please view the LICENSE.TXT file that was distributed with this source code.
 */

use common\classes\Migration;

/**
 * Class m240216_184210_add_credit_note_const
 */
class m240216_184210_add_credit_note_const extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $this->addConfigurationKey([
                'configuration_key' => 'CREDIT_NOTE_AVAILABLE',
                'configuration_title' => 'Show credit note reports',
                'configuration_description' => '',
                'configuration_group_id' => '',
                'configuration_value' => 'False',
                'sort_order' => '200',
                'date_added' => (new yii\db\Expression('now()')),
                'set_function' => 'tep_cfg_select_option(array(\'True\', \'False\'),'
            ]
        );
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        echo "m240216_184210_add_credit_note_const cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240216_184210_add_credit_note_const cannot be reverted.\n";

        return false;
    }
    */
}
