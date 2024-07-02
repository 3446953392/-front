import { CoolController, BaseController } from '@cool-midway/core';
import { DemoImportantMeetingEntity } from '../../entity/meeting'; 

/**
 * demo-meeting
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: DemoImportantMeetingEntity,
})
export class AdminImportantMeetingController extends BaseController {}
