import { CoolController, BaseController } from '@cool-midway/core';
import { AppOrderConfirmEntity } from '../../entity/confirm';

/**
 * 应用-订单确认
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: AppOrderConfirmEntity
})
export class AdminOrderConfirmsController extends BaseController {}
