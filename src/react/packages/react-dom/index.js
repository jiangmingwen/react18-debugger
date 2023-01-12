/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *      
 */

// Export all exports so that they're available in tests.
// We can't use export * from in Flow for some reason.
export * from './src/client/ReactDOM';
export * as default from './src/client/ReactDOM';
