import { CoolController, BaseController } from '@cool-midway/core';
import { DemoSpeechEntity } from '../../entity/speech'; 

/**
 * 模块-实体名
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: DemoSpeechEntity,
})
export class AdminSpeechController extends BaseController {}
