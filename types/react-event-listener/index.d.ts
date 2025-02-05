// Type definitions for react-event-listener 0.4
// Project: https://github.com/oliviertassinari/react-event-listener
// Definitions by: Alexey Svetliakov <https://github.com/asvetliakov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import React = require("react");

export interface EventOptions extends Pick<AddEventListenerOptions, "capture" | "passive"> {}

export function withOptions<T, TThis = any>(
    handler: (this: TThis, ev: T) => any,
    options: EventOptions,
): (this: TThis, ev: T) => any;

export type EventListenerThisType<T extends EventTarget | WindowEventTargets> = T extends keyof Window ? Window[T] : T;

export type OnErrorEventHandlerArgs = OnErrorEventHandlerNonNull extends (...args: infer A) => any ? A : [];

export interface EventListenerProps<T extends EventTarget | WindowEventTargets> {
    // Global events
    onPointerCancel?(this: EventListenerThisType<T>, ev: PointerEvent): any;
    onPointerCancelCapture?(this: EventListenerThisType<T>, ev: PointerEvent): any;
    onPointerDown?(this: EventListenerThisType<T>, ev: PointerEvent): any;
    onPointerDownCapture?(this: EventListenerThisType<T>, ev: PointerEvent): any;
    onPointerEnter?(this: EventListenerThisType<T>, ev: PointerEvent): any;
    onPointerEnterCapture?(this: EventListenerThisType<T>, ev: PointerEvent): any;
    onPointerLeave?(this: EventListenerThisType<T>, ev: PointerEvent): any;
    onPointerLeaveCapture?(this: EventListenerThisType<T>, ev: PointerEvent): any;
    onPointerMove?(this: EventListenerThisType<T>, ev: PointerEvent): any;
    onPointerMoveCapture?(this: EventListenerThisType<T>, ev: PointerEvent): any;
    onPointerOut?(this: EventListenerThisType<T>, ev: PointerEvent): any;
    onPointerOutCapture?(this: EventListenerThisType<T>, ev: PointerEvent): any;
    onPointerOver?(this: EventListenerThisType<T>, ev: PointerEvent): any;
    onPointerOverCapture?(this: EventListenerThisType<T>, ev: PointerEvent): any;
    onPointerUp?(this: EventListenerThisType<T>, ev: PointerEvent): any;
    onPointerUpCapture?(this: EventListenerThisType<T>, ev: PointerEvent): any;
    onWheel?(this: EventListenerThisType<T>, ev: WheelEvent): any;
    onWheelCapture?(this: EventListenerThisType<T>, ev: WheelEvent): any;
    onAbort?(this: EventListenerThisType<T>, ev: Event): any;
    onAbortCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onAfterPrint?(this: EventListenerThisType<T>, ev: Event): any;
    onAfterPrintCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onBeforePrint?(this: EventListenerThisType<T>, ev: Event): any;
    onBeforePrintCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onBeforeUnload?(this: EventListenerThisType<T>, ev: BeforeUnloadEvent): any;
    onBeforeUnloadCapture?(this: EventListenerThisType<T>, ev: BeforeUnloadEvent): any;
    onBlur?(this: EventListenerThisType<T>, ev: FocusEvent): any;
    onBlurCapture?(this: EventListenerThisType<T>, ev: FocusEvent): any;
    onCanPlay?(this: EventListenerThisType<T>, ev: Event): any;
    onCanPlayCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onCanPlayThrough?(this: EventListenerThisType<T>, ev: Event): any;
    onCanPlayThroughCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onChange?(this: EventListenerThisType<T>, ev: Event): any;
    onChangeCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onClick?(this: EventListenerThisType<T>, ev: MouseEvent): any;
    onClickCapture?(this: EventListenerThisType<T>, ev: MouseEvent): any;
    onCompassNeedsCalibration?(this: EventListenerThisType<T>, ev: Event): any;
    onCompassNeedsCalibrationCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onContextMenu?(this: EventListenerThisType<T>, ev: PointerEvent): any;
    onContextMenuCapture?(this: EventListenerThisType<T>, ev: PointerEvent): any;
    onDblClick?(this: EventListenerThisType<T>, ev: MouseEvent): any;
    onDblClickCapture?(this: EventListenerThisType<T>, ev: MouseEvent): any;
    onDeviceMotion?(this: EventListenerThisType<T>, ev: DeviceMotionEvent): any;
    onDeviceMotionCapture?(this: EventListenerThisType<T>, ev: DeviceMotionEvent): any;
    onDeviceOrientation?(this: EventListenerThisType<T>, ev: DeviceOrientationEvent): any;
    onDeviceOrientationCapture?(this: EventListenerThisType<T>, ev: DeviceOrientationEvent): any;
    onDrag?(this: EventListenerThisType<T>, ev: DragEvent): any;
    onDragCapture?(this: EventListenerThisType<T>, ev: DragEvent): any;
    onDragEnd?(this: EventListenerThisType<T>, ev: DragEvent): any;
    onDragEndCapture?(this: EventListenerThisType<T>, ev: DragEvent): any;
    onDragEnter?(this: EventListenerThisType<T>, ev: DragEvent): any;
    onDragEnterCapture?(this: EventListenerThisType<T>, ev: DragEvent): any;
    onDragLeave?(this: EventListenerThisType<T>, ev: DragEvent): any;
    onDragLeaveCapture?(this: EventListenerThisType<T>, ev: DragEvent): any;
    onDragOver?(this: EventListenerThisType<T>, ev: DragEvent): any;
    onDragOverCapture?(this: EventListenerThisType<T>, ev: DragEvent): any;
    onDragStart?(this: EventListenerThisType<T>, ev: DragEvent): any;
    onDragStartCapture?(this: EventListenerThisType<T>, ev: DragEvent): any;
    onDrop?(this: EventListenerThisType<T>, ev: DragEvent): any;
    onDropCapture?(this: EventListenerThisType<T>, ev: DragEvent): any;
    onDurationChange?(this: EventListenerThisType<T>, ev: Event): any;
    onDurationChangeCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onEmptied?(this: EventListenerThisType<T>, ev: Event): any;
    onEmptiedCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onEnded?(this: EventListenerThisType<T>, ev: Event): any;
    onEndedCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onError?(this: EventListenerThisType<T>, ...args: OnErrorEventHandlerArgs): any;
    onErrorCapture?(this: EventListenerThisType<T>, ...args: OnErrorEventHandlerArgs): any;
    onFocus?(this: EventListenerThisType<T>, ev: FocusEvent): any;
    onFocusCapture?(this: EventListenerThisType<T>, ev: FocusEvent): any;
    onHashChange?(this: EventListenerThisType<T>, ev: HashChangeEvent): any;
    onHashChangeCapture?(this: EventListenerThisType<T>, ev: HashChangeEvent): any;
    onInput?(this: EventListenerThisType<T>, ev: Event): any;
    onInputCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onKeyDown?(this: EventListenerThisType<T>, ev: KeyboardEvent): any;
    onKeyDownCapture?(this: EventListenerThisType<T>, ev: KeyboardEvent): any;
    onKeyPress?(this: EventListenerThisType<T>, ev: KeyboardEvent): any;
    onKeyPressCapture?(this: EventListenerThisType<T>, ev: KeyboardEvent): any;
    onKeyUp?(this: EventListenerThisType<T>, ev: KeyboardEvent): any;
    onKeyUpCapture?(this: EventListenerThisType<T>, ev: KeyboardEvent): any;
    onLoad?(this: EventListenerThisType<T>, ev: Event): any;
    onLoadCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onLoadedData?(this: EventListenerThisType<T>, ev: Event): any;
    onLoadedDataCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onLoadedMetadata?(this: EventListenerThisType<T>, ev: Event): any;
    onLoadedMetadataCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onLoadStart?(this: EventListenerThisType<T>, ev: Event): any;
    onLoadStartCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onMessage?(this: EventListenerThisType<T>, ev: MessageEvent): any;
    onMessageCapture?(this: EventListenerThisType<T>, ev: MessageEvent): any;
    onMouseDown?(this: EventListenerThisType<T>, ev: MouseEvent): any;
    onMouseDownCapture?(this: EventListenerThisType<T>, ev: MouseEvent): any;
    onMouseEnter?(this: EventListenerThisType<T>, ev: MouseEvent): any;
    onMouseEnterCapture?(this: EventListenerThisType<T>, ev: MouseEvent): any;
    onMouseLeave?(this: EventListenerThisType<T>, ev: MouseEvent): any;
    onMouseLeaveCapture?(this: EventListenerThisType<T>, ev: MouseEvent): any;
    onMouseMove?(this: EventListenerThisType<T>, ev: MouseEvent): any;
    onMouseMoveCapture?(this: EventListenerThisType<T>, ev: MouseEvent): any;
    onMouseOut?(this: EventListenerThisType<T>, ev: MouseEvent): any;
    onMouseOutCapture?(this: EventListenerThisType<T>, ev: MouseEvent): any;
    onMouseOver?(this: EventListenerThisType<T>, ev: MouseEvent): any;
    onMouseOverCapture?(this: EventListenerThisType<T>, ev: MouseEvent): any;
    onMouseUp?(this: EventListenerThisType<T>, ev: MouseEvent): any;
    onMouseUpCapture?(this: EventListenerThisType<T>, ev: MouseEvent): any;
    onMouseWheel?(this: EventListenerThisType<T>, ev: WheelEvent): any;
    onMouseWheelCapture?(this: EventListenerThisType<T>, ev: WheelEvent): any;
    onOffline?(this: EventListenerThisType<T>, ev: Event): any;
    onOfflineCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onOnline?(this: EventListenerThisType<T>, ev: Event): any;
    onOnlineCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onOrientationChange?(this: EventListenerThisType<T>, ev: Event): any;
    onOrientationChangeCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onPageHide?(this: EventListenerThisType<T>, ev: PageTransitionEvent): any;
    onPageHideCapture?(this: EventListenerThisType<T>, ev: PageTransitionEvent): any;
    onPageShow?(this: EventListenerThisType<T>, ev: PageTransitionEvent): any;
    onPageShowCapture?(this: EventListenerThisType<T>, ev: PageTransitionEvent): any;
    onPause?(this: EventListenerThisType<T>, ev: Event): any;
    onPauseCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onPlay?(this: EventListenerThisType<T>, ev: Event): any;
    onPlayCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onPlaying?(this: EventListenerThisType<T>, ev: Event): any;
    onPlayingCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onPopState?(this: EventListenerThisType<T>, ev: PopStateEvent): any;
    onPopStateCapture?(this: EventListenerThisType<T>, ev: PopStateEvent): any;
    onProgress?(this: EventListenerThisType<T>, ev: ProgressEvent): any;
    onProgressCapture?(this: EventListenerThisType<T>, ev: ProgressEvent): any;
    onRateChange?(this: EventListenerThisType<T>, ev: Event): any;
    onRateChangeCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onReadyStateChange?(this: EventListenerThisType<T>, ev: ProgressEvent): any;
    onReadyStateChangeCapture?(this: EventListenerThisType<T>, ev: ProgressEvent): any;
    onReset?(this: EventListenerThisType<T>, ev: Event): any;
    onResetCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onResize?(this: EventListenerThisType<T>, ev: UIEvent): any;
    onResizeCapture?(this: EventListenerThisType<T>, ev: UIEvent): any;
    onScroll?(this: EventListenerThisType<T>, ev: UIEvent): any;
    onScrollCapture?(this: EventListenerThisType<T>, ev: UIEvent): any;
    onSeeked?(this: EventListenerThisType<T>, ev: Event): any;
    onSeekedCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onSeeking?(this: EventListenerThisType<T>, ev: Event): any;
    onSeekingCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onSelect?(this: EventListenerThisType<T>, ev: UIEvent): any;
    onSelectCapture?(this: EventListenerThisType<T>, ev: UIEvent): any;
    onSelectionChange?(this: EventListenerThisType<T>, ev: Event): any;
    onSelectionChangeCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onStalled?(this: EventListenerThisType<T>, ev: Event): any;
    onStalledCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onStorage?(this: EventListenerThisType<T>, ev: StorageEvent): any;
    onStorageCapture?(this: EventListenerThisType<T>, ev: StorageEvent): any;
    onSubmit?(this: EventListenerThisType<T>, ev: Event): any;
    onSubmitCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onSuspend?(this: EventListenerThisType<T>, ev: Event): any;
    onSuspendCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onTimeUpdate?(this: EventListenerThisType<T>, ev: Event): any;
    onTimeUpdateCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onTouchCancel?(this: EventListenerThisType<T>, ev: TouchEvent): any;
    onTouchCancelCapture?(this: EventListenerThisType<T>, ev: TouchEvent): any;
    onTouchEnd?(this: EventListenerThisType<T>, ev: TouchEvent): any;
    onTouchEndCapture?(this: EventListenerThisType<T>, ev: TouchEvent): any;
    onTouchMove?(this: EventListenerThisType<T>, ev: TouchEvent): any;
    onTouchMoveCapture?(this: EventListenerThisType<T>, ev: TouchEvent): any;
    onTouchStart?(this: EventListenerThisType<T>, ev: TouchEvent): any;
    onTouchStartCapture?(this: EventListenerThisType<T>, ev: TouchEvent): any;
    onUnload?(this: EventListenerThisType<T>, ev: Event): any;
    onUnloadCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onVolumeChange?(this: EventListenerThisType<T>, ev: Event): any;
    onVolumeChangeCapture?(this: EventListenerThisType<T>, ev: Event): any;
    onWaiting?(this: EventListenerThisType<T>, ev: Event): any;
    onWaitingCapture?(this: EventListenerThisType<T>, ev: Event): any;

    /**
     * Target (window or document)
     */
    target: T;
}

export type WindowEventTargets = { [K in keyof Window]: Window[K] extends EventTarget ? K : never }[keyof Window];

export default class EventListener<T extends EventTarget | WindowEventTargets>
    extends React.PureComponent<EventListenerProps<T>>
{}
