import {baseFn} from "../js/base.macro";

test("Проверка на доступность функции базового модуля", () => {
    expect(baseFn()).toEqual("i`m base module")
})