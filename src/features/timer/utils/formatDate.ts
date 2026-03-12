/**
 * Возвращает правильную форму существительного для числа (для русского языка).
 * @param value - число (предположительно целое)
 * @param forms - кортеж из трёх форм: [для 1, для 2-4, для остальных]
 * @returns выбранная форма
 */
function pluralize(value: number, forms: [string, string, string]): string {
    const absValue = Math.abs(value);
    const lastTwo = absValue % 100;
  
    // Исключение для чисел от 11 до 14
    if (lastTwo >= 11 && lastTwo <= 14) {
      return forms[2];
    }
  
    const lastDigit = absValue % 10;
    if (lastDigit === 1) {
      return forms[0];
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
      return forms[1];
    }
    return forms[2];
  }
  
  /**
   * Форматирует число дней с правильным склонением.
   * @param value - количество дней
   * @returns строка вида "X день/дня/дней"
   */
  export function formatDaysString(value: number): string {
    return `${pluralize(value, ['день', 'дня', 'дней'])}`;
  }
  
  /**
   * Форматирует число часов с правильным склонением.
   * @param value - количество часов
   * @returns строка вида "X час/часа/часов"
   */
  export function formatHoursString(value: number): string {
    return `${pluralize(value, ['час', 'часа', 'часов'])}`;
  }
  
  /**
   * Форматирует число минут с правильным склонением.
   * @param value - количество минут
   * @returns строка вида "X минута/минуты/минут"
   */
  export function formatMinutesString(value: number): string {
    return `${pluralize(value, ['минута', 'минуты', 'минут'])}`;
  }
  
  /**
   * Форматирует число секунд с правильным склонением.
   * @param value - количество секунд
   * @returns строка вида "X секунда/секунды/секунд"
   */
  export function formatSecondsString(value: number): string {
    return `${pluralize(value, ['секунда', 'секунды', 'секунд'])}`;
  }