import { CoolController, BaseController } from '@cool-midway/core';
import { DictStudyActivityEntity } from '../../entity/activity';

/**
 * 字典-研学活动
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: DictStudyActivityEntity
})
export class AdminDictStudyActivitiesController extends BaseController {}
