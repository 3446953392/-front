import { CoolController, BaseController } from '@cool-midway/core';
import { TaskOrderConfirmEntity } from '../../entity/confirm';

/**
 * 任务-订单确认
 */
@CoolController({
  api: ['list', 'info', 'add'],
  entity: TaskOrderConfirmEntity
})
export class AdminTaskOrderConfirmsController extends BaseController { }
