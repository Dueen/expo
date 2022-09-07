/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#pragma once

#include <hermes/ABI46_0_0hermes.h>
#include <ABI46_0_0jsireact/ABI46_0_0JSIExecutor.h>
#include <functional>
#include <utility>

namespace ABI46_0_0facebook {
namespace ABI46_0_0React {

class HermesExecutorFactory : public JSExecutorFactory {
 public:
  explicit HermesExecutorFactory(
      JSIExecutor::RuntimeInstaller runtimeInstaller,
      const JSIScopedTimeoutInvoker &timeoutInvoker =
          JSIExecutor::defaultTimeoutInvoker,
      ::ABI46_0_0hermes::vm::RuntimeConfig runtimeConfig = ::ABI46_0_0hermes::vm::RuntimeConfig())
      : runtimeInstaller_(runtimeInstaller),
        timeoutInvoker_(timeoutInvoker),
        runtimeConfig_(std::move(runtimeConfig)) {
    assert(timeoutInvoker_ && "Should not have empty timeoutInvoker");
  }

  std::unique_ptr<JSExecutor> createJSExecutor(
      std::shared_ptr<ExecutorDelegate> delegate,
      std::shared_ptr<MessageQueueThread> jsQueue) override;

 private:
  JSIExecutor::RuntimeInstaller runtimeInstaller_;
  JSIScopedTimeoutInvoker timeoutInvoker_;
  ::ABI46_0_0hermes::vm::RuntimeConfig runtimeConfig_;
};

class HermesExecutor : public JSIExecutor {
 public:
  HermesExecutor(
      std::shared_ptr<jsi::Runtime> runtime,
      std::shared_ptr<ExecutorDelegate> delegate,
      std::shared_ptr<MessageQueueThread> jsQueue,
      const JSIScopedTimeoutInvoker &timeoutInvoker,
      RuntimeInstaller runtimeInstaller);

 private:
  JSIScopedTimeoutInvoker timeoutInvoker_;
};

} // namespace ABI46_0_0React
} // namespace ABI46_0_0facebook
