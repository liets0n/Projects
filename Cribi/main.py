"""
    versão: 0.1v
    Autor: Lietson Dos Santos
    Data de Criação: 23/01/2022 03:27:50 dom
    última actualização: 07/02/2022 22:11:49 seg

    Descrição: Este software foi projetado para facilitar a conversão de letras entendidas por humanos(ABC)
               para caracteres entendidos por máquinas(01)
"""

import sys
from Packages.criptografar import criptografar


def helper():  # Está função mostra as
    print('Cribi v1 by Lietson Dos Santos')
    print(f'Execute:$ python3 main.py <PARAMETROS> <MENSAGEM>')
    print(f'Exemplo:$ python3 main.py -c -s "Hello, World!!!"')
    print(f'Também pode executar chamando apenas o nome no app exemplo:$ python3 main.py"\n')

    print('-c Criptografar \n-d Descriptografar \n-s Juntar os caracteres \n-h Ajuda \n-f Converte o texto contido '
          'dentro de um arquivo \n-o Colocar a saida do do comando em um arquivo')
    print('\nOBS: Textos logos têm que estar dentro de " "')


def main():
    if len(sys.argv) == 1:
        message = input("Digite a mensagem: ")
        space = input("Deseja colocar espaço para separar os caracteres?([Y], n)")

        if message != '':
            if space.lower() == 'y' or '':
                criptografar(message, " ")
            elif space.lower() == 'n':
                criptografar(message)
            else:
                helper()
        else:
            helper()
    elif '-h' in sys.argv:
        helper()
    else:
        message = sys.argv[-1]  # Recebe a mensagem passada via parâmetro

        if '-c' in sys.argv:
            if '-s' in sys.argv:
                if '-f' in sys.argv:
                    with open(sys.argv[-1], 'r') as arq:  # Faz a leitura do texto contido no arquivo
                        for line in arq:
                            criptografar(line, " ")
                elif '-o' in sys.argv[-2]:
                    with open(sys.argv[-1], 'w') as arq:  # Abre o arquivo para escrita
                        binary = str(criptografar(sys.argv[-3], " "))
                        arq.write(binary)
                else:
                    criptografar(message, " ")
            else:
                if '-f' in sys.argv:
                    with open(sys.argv[-1], 'r') as arq:  # Faz a leitura do texto contido no arquivo
                        for line in arq:
                            criptografar(line)
                elif '-o' in sys.argv[-2]:
                    with open(sys.argv[-1], 'w') as arq:  # Abre o arquivo para escrita
                        binary = str(criptografar(sys.argv[-3], " "))
                        arq.write(binary)
                else:
                    criptografar(message)
        else:
            helper()


if __name__ == '__main__':
    main()
