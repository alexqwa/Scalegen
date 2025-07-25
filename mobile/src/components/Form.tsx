import { View, Text, TextInput } from "react-native";

interface FormType {
  title: string;
  month: string;
  year: string;
  onChangeTitle?: (text: string) => void;
  onChangeMonth?: (text: string) => void;
  onChangeYear?: (text: string) => void;
}

export function Form({
  title,
  month,
  year,
  onChangeTitle,
  onChangeMonth,
  onChangeYear,
}: FormType) {
  return (
    <View className="space-y-4">
      <View className="space-y-2">
        <Text className="block text-sm font-archivo_700 text-white ml-2">
          Título
        </Text>
        <TextInput
          value={title}
          onChangeText={onChangeTitle}
          className="input-custom w-full uppercase bg-[#202024] h-14 rounded-xl px-4 border-2 border-[#202024] text-white text-base font-archivo_600 focus:border-2 focus:border-[#323238] transition-all delay-300"
          placeholder="Nome da escala"
          placeholderTextColor="#E1E1E6"
          cursorColor="#fff"
        />
      </View>
      <View className="flex-row w-full space-x-4">
        <View className="flex-1 space-y-2">
          <Text className="block text-sm font-archivo_700 text-white ml-2">
            Mês
          </Text>
          <TextInput
            value={month}
            onChangeText={onChangeMonth}
            className="input-custom w-full bg-[#202024] h-14 rounded-xl px-4 border-2 border-[#202024] text-white text-base font-archivo_600 focus:border-2 focus:border-[#323238] transition-all delay-300"
            placeholder="Mês de referência"
            placeholderTextColor="#E1E1E6"
            keyboardType="number-pad"
            cursorColor="#fff"
            maxLength={2}
          />
        </View>

        <View className="flex-1 space-y-2">
          <Text className="block text-sm font-archivo_700 text-white ml-2">
            Ano
          </Text>
          <TextInput
            value={year}
            onChangeText={onChangeYear}
            className="input-custom w-full bg-[#202024] h-14 rounded-xl px-4 border-2 border-[#202024] text-white text-base font-archivo_600 focus:border-2 focus:border-[#323238] transition-all delay-300"
            placeholder="Ano de referência"
            placeholderTextColor="#E1E1E6"
            keyboardType="number-pad"
            cursorColor="#fff"
            maxLength={4}
          />
        </View>
      </View>
    </View>
  );
}
