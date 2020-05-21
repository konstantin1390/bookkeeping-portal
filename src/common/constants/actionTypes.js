export default Object.defineProperties(
  {},
  {
    TEST_ACTION: { value: 'test_action', writable: false }, // если action запускает сагу
    TEST_ACTION_STORE: { value: 'test_action_store', writable: false }, // если action вносит изменения в стор
    // для смены регистра ставим курсор на текст и Ctrl+Shift+U (Cmd+Shift+U)

    SET_USED_LOCALE_STORE: { value: 'set_used_locale_store', writable: false },
  },
);
