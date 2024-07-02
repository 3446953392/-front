import { CoolController, BaseController } from '@cool-midway/core';
import { DemoActivityEntity } from '../../entity/activity'; 

/**
 * demo-activity
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: DemoActivityEntity,
})
export class AdminActivityController extends BaseController {}
