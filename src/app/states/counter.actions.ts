import { createAction, props } from "@ngrx/store";

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
export const setCounterValue = createAction('[Counter Component] SetCounterValue', props<{countValue: number}>());
export const counterRange = createAction('[Counter Component] CounterRange', props<{rangeObject: number}>());