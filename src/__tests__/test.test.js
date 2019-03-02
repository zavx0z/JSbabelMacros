import {baseFn} from "../js/base";

test("Проверка на доступность функции базового модуля", () => {
    expect(baseFn()).toEqual("i`m base module")
})