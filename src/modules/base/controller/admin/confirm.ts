import { CoolController, BaseController } from '@cool-midway/core';
import { BaseOrderConfirmEntity } from '../../entity/confirm';

/**
 * base-BaseOrderConfirm
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: BaseOrderConfirmEntity,
})
export class AdminBaseOrderConfirmsController extends BaseController {}
