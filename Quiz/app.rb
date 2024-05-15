require 'colorize'

def facil(pontos, vidas)
    system('clear')

    # Primeira questão
    puts "Nível: Fácil"
    puts "Pontos: #{pontos}"
    puts "Vidas: #{vidas}"
    puts "-" * 30
    
    puts "\nQuantos lados tem um quadrado?"
    puts "\n[1] - 2 lados \t [2] - 3 lados"
    puts "\n[3] - 12 lados \t [4] - 4 lados"

    print "\nR: "
    resposta = gets.chomp.to_i

    if(resposta != 4)
        puts "\nErrado".red
        vidas = vidas - 1
    else
        puts "\nCerto".green
        pontos = pontos + 10
    end

    print "Click qualquer tecla para continuar..."
    press = gets

    # Segunda questão
    system('clear')
    puts "Nível: Fácil"
    puts "Pontos: #{pontos}"
    puts "Vidas: #{vidas}"
    puts "-" * 30
    
    puts "\nQuantos dias tem uma semana?"
    puts "\n[1] - 17 Dias \t [2] - 21 Dias"
    puts "\n[3] - 7 Dias \t [4] - 28 Dias"

    print "\nR: "
    resposta = gets.chomp.to_i

    if(resposta != 3)
        puts "\nErrado".red
        vidas = vidas - 1
    else
        puts "\nCerto".green
        pontos = pontos + 10
    end

    # Terceira questão
    system('clear')
    puts "Nível: Fácil"
    puts "Pontos: #{pontos}"
    puts "Vidas: #{vidas}"
    puts "-" * 30
    
    puts "\nQual desses esportes utiliza taco? "
    puts "\n[1] - Patinação  [2] - Atletismo"
    puts "\n[3] - beisebol \t [4] - futebol"

    print "\nR: "
    resposta = gets.chomp.to_i

    if(resposta != 3)
        puts "\nErrado".red
        vidas = vidas - 1
    else
        puts "\nCerto".green
        pontos = pontos + 10
    end

    print "Click qualquer tecla para continuar..."
    press = gets

    # Quarta questão
    system('clear')
    puts "Nível: Fácil"
    puts "Pontos: #{pontos}"
    puts "Vidas: #{vidas}"
    puts "-" * 30
    
    puts "\nQual deles não tem asas? "
    puts "\n[1] -  Pulga \t [2] - Gavião"
    puts "\n[3] -  Falcão \t [4] - Galo"

    print "\nR: "
    resposta = gets.chomp.to_i

    if(resposta != 1)
        puts "\nErrado".red
        vidas = vidas - 1
    else
        puts "\nCerto".green
        pontos = pontos + 10
    end

    print "Click qualquer tecla para continuar..."
    press = gets
    
    # Quarta questão
    system('clear')
    puts "Nível: Fácil"
    puts "Pontos: #{pontos}"
    puts "Vidas: #{vidas}"
    puts "-" * 30
    
    puts "\nQue alimento tem como principal riqueza o caroteno?"
    puts "\n[1] -  Maçã \t [2] - Arroz"
    puts "\n[3] -  Tomate \t [4] - Cenoura"

    print "\nR: "
    resposta = gets.chomp.to_i

    if(resposta != 4)
        puts "\nErrado".red
        vidas = vidas - 1
    else
        puts "\nCerto".green
        pontos = pontos + 10
    end

    print "Click qualquer tecla para continuar..."
    press = gets
    
    # Quarta questão
    system('clear')
    puts "Nível: Fácil"
    puts "Pontos: #{pontos}"
    puts "Vidas: #{vidas}"
    puts "-" * 30
    
    puts "\nQual é o transporte usado pelo motoboy para fazer o seu trabalho? "
    puts "\n[1] -  Motocicleta \t [2] - Avião"
    puts "\n[3] -  Carro \t\t [4] - Bicicleta"

    print "\nR: "
    resposta = gets.chomp.to_i

    if(resposta != 1)
        puts "\nErrado".red
        vidas = vidas - 1
    else
        puts "\nCerto".green
        pontos = pontos + 10
    end

    print "Parabéns tu passaste o nível Fácil".green
    print "Click qualquer tecla para continuar..."
    press = gets

end

def intermedio(pontos, vidas)

    # Primeira questão
    system('clear')
    puts "Nível: Intermédio"
    puts "Pontos: #{pontos}"
    puts "Vidas: #{vidas}"
    puts "-" * 30
    
    puts "\nQual deles não é carnívoro?"
    puts "\n[1] - Panda \t [2] - Urso"
    puts "\n[3] - leão \t [4] - Tigre"

    print "\nR: "
    resposta = gets.chomp.to_i

    if (vidas == 0)
        puts "\n\nVocê Perdeu :(".red
        puts "Pontos: #{pontos}"

        arquivo = File.readlines("db/pontos.txt")

        if (arquivo[0].to_i < pontos)
            arq = File.new('db/pontos.txt', 'w') 
            arq.puts(pontos)
            arq.close
        end

        print "Click qualquer tecla para continuar..."
        press = gets
        exit
    else
        if(resposta != 1)
            puts "\nErrado".red
            vidas = vidas - 1
        else
            puts "\nCerto".green
            pontos = pontos + 10
        end    
    end

    print "Click qualquer tecla para continuar..."
    press = gets

    # Segunda questão
    system('clear')
    puts "Nível: Intermédio"
    puts "Pontos: #{pontos}"
    puts "Vidas: #{vidas}"
    puts "-" * 30
     
    puts "\nPandora é marca de?"
    puts "\n[1] - Carro \t\t [2] - Jóias"
    puts "\n[3] - Computadores \t [4] - Telefone"
 
    print "\nR: "
    resposta = gets.chomp.to_i
 
    if (vidas == 0)
        puts "\n\nVocê Perdeu :(".red
        puts "Pontos: #{pontos}"

        arquivo = File.readlines("db/pontos.txt")

        if (arquivo[0].to_i < pontos)
            arq = File.new('db/pontos.txt', 'w') 
            arq.puts(pontos)
            arq.close
        end

        print "Click qualquer tecla para continuar..."
        press = gets
        exit
    else
        if(resposta != 2)
            puts "\nErrado".red
            vidas = vidas - 1
        else
            puts "\nCerto".green
            pontos = pontos + 10
        end    
    end
 
    print "Click qualquer tecla para continuar..."
    press = gets
    
    # Segunda questão
    system('clear')
    puts "Nível: Intermédio"
    puts "Pontos: #{pontos}"
    puts "Vidas: #{vidas}"
    puts "-" * 30
     
    puts "\nQuantos elementos químicos tem a tabela périodica?"
    puts "\n[1] - 100 \t [2] - 110"
    puts "\n[3] - 118 \t [4] - 53"
 
    print "\nR: "
    resposta = gets.chomp.to_i
 
    if (vidas == 0)
        puts "\n\nVocê Perdeu :(".red
        puts "Pontos: #{pontos}"

        arquivo = File.readlines("db/pontos.txt")

        if (arquivo[0].to_i < pontos)
            arq = File.new('db/pontos.txt', 'w') 
            arq.puts(pontos)
            arq.close
        end

        print "Click qualquer tecla para continuar..."
        press = gets
        exit
    else
        if(resposta != 3)
            puts "\nErrado".red
            vidas = vidas - 1
        else
            puts "\nCerto".green
            pontos = pontos + 10
        end    
    end
 
    print "Click qualquer tecla para continuar..."
    press = gets

    # Quarta questão
    system('clear')
    puts "Nível: Intermédio"
    puts "Pontos: #{pontos}"
    puts "Vidas: #{vidas}"
    puts "-" * 30
     
    puts "\nQual delas não é uma princesa disnay?"
    puts "\n[1] - Aurora \t [2] - Frozen"
    puts "\n[3] - Ariel \t [4] - Rapunzel"
 
    print "\nR: "
    resposta = gets.chomp.to_i
 
    if (vidas == 0)
        puts "\n\nVocê Perdeu :(".red
        puts "Pontos: #{pontos}"

        arquivo = File.readlines("db/pontos.txt")

        if (arquivo[0].to_i < pontos)
            arq = File.new('db/pontos.txt', 'w') 
            arq.puts(pontos)
            arq.close
        end

        print "Click qualquer tecla para continuar..."
        press = gets
        exit
    else
        if(resposta != 2)
            puts "\nErrado".red
            vidas = vidas - 1
        else
            puts "\nCerto".green
            pontos = pontos + 10
        end    
    end
 
    print "Click qualquer tecla para continuar..."
    press = gets

    # Segunda questão
    system('clear')
    puts "Nível: Intermédio"
    puts "Pontos: #{pontos}"
    puts "Vidas: #{vidas}"
    puts "-" * 30
     
    puts "\nQual é o nome da personagem principal da serie MR.Robot??"
    puts "\n[1] - Eliot Alderson \t\t [2] - MR.Robot"
    puts "\n[3] - Lietson dos santos\t [4] - Ben alderson"
 
    print "\nR: "
    resposta = gets.chomp.to_i
 
    if (vidas == 0)
        puts "\n\nVocê Perdeu :(".red
        puts "Pontos: #{pontos}"

        arquivo = File.readlines("db/pontos.txt")

        if (arquivo[0].to_i < pontos)
            arq = File.new('db/pontos.txt', 'w') 
            arq.puts(pontos)
            arq.close
        end

        print "Click qualquer tecla para continuar..."
        press = gets
        exit
    else
        if(resposta != 1)
            puts "\nErrado".red
            vidas = vidas - 1
        else
            puts "\nCerto".green
            pontos = pontos + 10
        end    
    end


    puts "Parabéns tu passaste o nível intermédiario".green
    print "Click qualquer tecla para continuar...\n"
    press = gets
end

def dificil(pontos, vidas)

    # Primeira questão
    system('clear')
    puts "Nível: Fácil"
    puts "Pontos: #{pontos}"
    puts "Vidas: #{vidas}"
    puts "-" * 30
    
    puts "\nQuantos dias tem três semanas? "
    puts "\n[1] -  28 Dias \t [2] - 21 Dias"
    puts "\n[3] -  14 Dias \t [4] - 35 Dias"

    print "\nR: "
    resposta = gets.chomp.to_i

    if(resposta != 2)
        puts "\nErrado".red
        vidas = vidas - 1
    else
        puts "\nCerto".green
        pontos = pontos + 10
    end

    print "Click qualquer tecla para continuar..."
    press = gets

    # Segunda questão
    system('clear')
    puts "Nível: Fácil"
    puts "Pontos: #{pontos}"
    puts "Vidas: #{vidas}"
    puts "-" * 30
    
    puts "\nQuantas estrelas tem a bandeira dos estados unidos da américa? "
    puts "\n[1] -  50 \t [2] - 29"
    puts "\n[3] -  48 \t [4] - 60"

    print "\nR: "
    resposta = gets.chomp.to_i

    if(resposta != 1)
        puts "\nErrado".red
        vidas = vidas - 1
    else
        puts "\nCerto".green
        pontos = pontos + 10
    end

    print "Click qualquer tecla para continuar..."
    press = gets

    # Terceira questão
    system('clear')
    puts "Nível: Fácil"
    puts "Pontos: #{pontos}"
    puts "Vidas: #{vidas}"
    puts "-" * 30
    
    puts "\nQual é o idioma oficial do japão?"
    puts "\n[1] -  Mandarim \t [2] - Bengali"
    puts "\n[3] -  Nihongo \t\t [4] - Hindi-urdu"

    print "\nR: "
    resposta = gets.chomp.to_i

    if(resposta != 3)
        puts "\nErrado".red
        vidas = vidas - 1
    else
        puts "\nCerto".green
        pontos = pontos + 10
    end

    print "Click qualquer tecla para continuar..."
    press = gets

    # Quarta questão
    system('clear')
    puts "Nível: Fácil"
    puts "Pontos: #{pontos}"
    puts "Vidas: #{vidas}"
    puts "-" * 30
    
    puts "\nQuantos centímetrosequilavem um metro?"
    puts "\n[1] -  10000 \t [2] - 100"
    puts "\n[3] -  10 \t [4] - 1000"

    print "\nR: "
    resposta = gets.chomp.to_i

    if(resposta != 2)
        puts "\nErrado".red
        vidas = vidas - 1
    else
        puts "\nCerto".green
        pontos = pontos + 10
    end

    print "Click qualquer tecla para continuar..."
    press = gets
    
    # Quinta questão
    system('clear')
    puts "Nível: Fácil"
    puts "Pontos: #{pontos}"
    puts "Vidas: #{vidas}"
    puts "-" * 30
    
    puts "\nQueda rápida e súbida de rochas e neve: "
    puts "\n[1] -  Tempestade \t [2] - Tufão"
    puts "\n[3] -  Avalanche \t [4] - Teremoto"

    print "\nR: "
    resposta = gets.chomp.to_i

    if(resposta != 3)
        puts "\nErrado".red
        vidas = vidas - 1
    else
        puts "\nCerto".green
        pontos = pontos + 10
    end

    print "Parabéns tu finalizaste o JOGO.".gree
    print "Click qualquer tecla para continuar..."
    press = gets
end

loop do
    puts "[1] - Iniciar"
    puts "[2] - Maior pontuação"
    puts "[3] - Nível"
    puts "[4] - Sair"

    print "\n>> "
    valor = gets.chomp.to_i

    if(valor === 1)
        pontos = 0
        vidas = 3

        facil(pontos, vidas)
        intermedio(pontos, vidas)
        dificil(pontos, vidas)
    elsif(valor === 2)

        arq = File.readlines('db/pontos.txt')
        print "\n*** A maior pontuação foi #{arq[0]}"
        puts "***"
    elsif(valor === 3)
        puts "[1] - Fácil"
        puts "[2] - Intermédio"
        puts "[3] - Difícil"
        
        print "\n>> "
        press = gets.chomp.to_i 

        if(valor === 1)
        
        elsif(valor === 2)

        elsif(valor === 3)

        end
    elsif(valor === 4)
        puts "Obrigado por ter usado o Quiz espero que tenha gostado ;)"
        exit()
    end
end