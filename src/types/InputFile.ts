import { ReadStream } from 'fs';
import { FileOptions } from '../index';

export type InputFile = ReadStream | Buffer | File | FileOptions;
