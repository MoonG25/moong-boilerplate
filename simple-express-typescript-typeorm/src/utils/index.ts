import axios from 'axios';
import { getConnection, QueryRunner } from "typeorm";

const WEBHOOK_URL = '';

export const getQueryRunner = (): QueryRunner => {
  return getConnection('write').createQueryRunner();
}

export const rollBackRelease = async (queryRunner: QueryRunner): Promise<void> => {
  await queryRunner.rollbackTransaction();
  await queryRunner.release();
}

export const endConnProcess = async (queryRunner: QueryRunner, result: any): Promise<any> => {
  if (result.status === 200) {
    await queryRunner.commitTransaction();
    await queryRunner.release();
    result.result = "SUCCESS";
  } else {
    await rollBackRelease(queryRunner);
    result.result = "FAIL";
  }

  return result;
}

export const slackNoti = (message: string): void => {
  axios.post(WEBHOOK_URL, { text: message });
}