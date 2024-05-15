import json


GREEN = '\33[30;42m'
NORMAL = '\33[m'

def criptografar(message, space='', local=""):
    binary = []

    print(GREEN + 'Binary:' + NORMAL + ' ', end="")

    try:
        with open('caracteres.json', 'r') as arq:  # Lê o arquivo "caracteres.json"
            obj = json.load(arq)

            for caracter in message:
                if caracter == 'space':
                    binary.append(' ')
                    print(' ', end="{}".format(space))
                else:
                    try:
                        binary.append(obj[caracter])
                        conversion = obj[caracter]
                    except:
                        print("Erro ao converter a String")
                    else:
                        print(conversion, end="{}".format(space))
    except:
        print(' Infelizmente houve um erro :(')
    else:
        return binary


if __name__ == "__main__":
    user_value = input("Digite a menssagem: ")
    criptografar(user_value, ' ')
