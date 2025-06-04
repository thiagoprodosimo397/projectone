import pygame
import random

# Inicializa o Pygame
pygame.init()

# Configurações do jogo
LARGURA_TELA = 800
ALTURA_TELA = 400
PRETO = (0, 0, 0)
BRANCO = (255, 255, 255)
VERDE = (0, 255, 0)

# Criar a tela
tela = pygame.display.set_mode((LARGURA_TELA, ALTURA_TELA))
pygame.display.set_caption("Jogo do Dino Simples")

# Relógio para controlar os quadros por segundo (FPS)
relogio = pygame.time.Clock()

# Classe para o jogador
class Jogador(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()
        self.image = pygame.Surface((50, 50))
        self.image.fill(VERDE)
        self.rect = self.image.get_rect()
        self.rect.x = 50
        self.rect.y = ALTURA_TELA - 100
        self.velocidade_y = 0

    def pular(self):
        if self.rect.y == ALTURA_TELA - 100:
            self.velocidade_y = -15

    def atualizar(self):
        self.velocidade_y += 1  # Gravidade
        self.rect.y += self.velocidade_y
        if self.rect.y > ALTURA_TELA - 100:
            self.rect.y = ALTURA_TELA - 100

# Classe para obstáculos
class Obstaculo(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()
        self.image = pygame.Surface((50, 50))
        self.image.fill(PRETO)
        self.rect = self.image.get_rect()
        self.rect.x = LARGURA_TELA
        self.rect.y = ALTURA_TELA - 100

    def atualizar(self):
        self.rect.x -= 10
        if self.rect.x < -50:
            self.rect.x = LARGURA_TELA
            self.rect.y = ALTURA_TELA - 100

# Configurar sprites
todos_sprites = pygame.sprite.Group()
obstaculos = pygame.sprite.Group()

jogador = Jogador()
todos_sprites.add(jogador)

obstaculo = Obstaculo()
todos_sprites.add(obstaculo)
obstaculos.add(obstaculo)

# Loop principal do jogo
executando = True
while executando:
    for evento in pygame.event.get():
        if evento.type == pygame.QUIT:
            executando = False
        if evento.type == pygame.KEYDOWN:
            if evento.key == pygame.K_SPACE:
                jogador.pular()

    # Atualizar
    todos_sprites.update()

    # Detectar colisão
    if pygame.sprite.spritecollide(jogador, obstaculos, False):
        print("Game Over!")
        executando = False

    # Desenhar na tela
    tela.fill(BRANCO)
    todos_sprites.draw(tela)

    pygame.display.flip()
    relogio.tick(30)

pygame.quit()
 