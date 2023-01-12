/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *      
 */

// Keep in sync with https://github.com/facebook/flow/blob/main/lib/react.js
// Export all exports so that they're available in tests.
// We can't use export * from in Flow for some reason.
export * from './src/React';

export * as default from './src/React'; 