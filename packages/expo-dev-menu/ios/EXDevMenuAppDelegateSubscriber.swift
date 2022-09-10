// Copyright 2018-present 650 Industries. All rights reserved.

import ExpoModulesCore

public class EXDevMenuAppDelegateSubscriber: ExpoAppDelegateSubscriber {
  public func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
    disableOnboardingIfNeeded(url)
    return false
  }
  
  private func disableOnboardingIfNeeded(_ url: URL) {
    if url.relativeString.contains("disableOnboarding=1") {
      DevMenuPreferences.isOnboardingFinished = true
    }
  }
}
