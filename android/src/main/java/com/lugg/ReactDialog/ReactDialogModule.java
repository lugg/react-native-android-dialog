package com.lugg.ReactDialog;

import android.app.Activity;
import android.util.Log;
import android.view.View;

import android.graphics.Color;
import android.widget.TextView;

import com.facebook.react.common.ReactConstants;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.Callback;

import java.util.Map;
import java.util.HashMap;

public class ReactDialogModule extends ReactContextBaseJavaModule {
  public ReactDialogModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "DialogAndroid";
  }

  @ReactMethod
  public void show(String message) {
  }
}
