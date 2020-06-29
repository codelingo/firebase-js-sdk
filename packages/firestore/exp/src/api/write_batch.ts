/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { cast } from '../../../lite/src/api/util';
import { WriteBatch } from '../../../lite/src/api/write_batch';
// See https://github.com/typescript-eslint/typescript-eslint/issues/363
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as firestore from '../../index';

import { Firestore } from './database';

export function writeBatch(
  firestore: firestore.FirebaseFirestore
): firestore.WriteBatch {
  const firestoreImpl = cast(firestore, Firestore);
  return new WriteBatch(firestoreImpl, writes =>
    firestoreImpl
      ._getFirestoreClient()
      .then(firestoreClient => firestoreClient.write(writes))
  );
}