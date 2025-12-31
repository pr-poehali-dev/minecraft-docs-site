import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const sections = [
    { id: 'introduction', label: 'Введение', icon: 'BookOpen' },
    { id: 'installation', label: 'Установка', icon: 'Download' },
    { id: 'mods', label: 'Моды', icon: 'Puzzle' },
    { id: 'faq', label: 'FAQ', icon: 'HelpCircle' },
    { id: 'community', label: 'Сообщество', icon: 'Users' },
  ];

  const faqItems = [
    {
      question: 'Как установить Minecraft?',
      answer: 'Скачайте официальный лаунчер с minecraft.net, запустите установку и войдите в аккаунт Microsoft.'
    },
    {
      question: 'Какие системные требования?',
      answer: 'Минимум: Intel Core i3 3210 / AMD A8-7600, 4GB RAM, Intel HD 4000 / AMD Radeon R5, 1GB HDD.'
    },
    {
      question: 'Можно ли играть без интернета?',
      answer: 'Да, после первого запуска можно играть в одиночном режиме офлайн.'
    },
    {
      question: 'Как установить моды?',
      answer: 'Установите Forge или Fabric, скачайте моды в папку mods в директории игры.'
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'introduction':
        return (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h1 className="text-4xl font-bold mb-4">Добро пожаловать в документацию Minecraft</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Minecraft — это игра-песочница, где вы можете строить, исследовать и выживать в бесконечном мире из блоков.
              </p>
            </div>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Icon name="Sparkles" size={24} className="text-primary" />
                Что вы можете делать
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Строить уникальные постройки от простых домов до сложных механизмов</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Исследовать различные биомы, пещеры и измерения</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Играть с друзьями на серверах и в локальной сети</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <span>Устанавливать моды для расширения возможностей игры</span>
                </li>
              </ul>
            </Card>

            <div>
              <h3 className="text-2xl font-semibold mb-3">Начало работы</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Эта документация поможет вам освоить основы игры, установить моды и найти ответы на частые вопросы. 
                Используйте навигацию слева для перехода между разделами.
              </p>
            </div>
          </div>
        );

      case 'installation':
        return (
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Установка Minecraft</h1>
            
            <div className="space-y-4">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <Icon name="Download" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Шаг 1: Скачайте лаунчер</h3>
                    <p className="text-muted-foreground mb-3">
                      Перейдите на официальный сайт minecraft.net и скачайте лаунчер для вашей операционной системы.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Icon name="Monitor" size={16} className="mr-2" />
                        Windows
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Apple" size={16} className="mr-2" />
                        macOS
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Terminal" size={16} className="mr-2" />
                        Linux
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Шаг 2: Войдите в аккаунт</h3>
                    <p className="text-muted-foreground">
                      Запустите лаунчер и войдите используя аккаунт Microsoft. Если у вас нет аккаунта, создайте его бесплатно.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <Icon name="Play" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Шаг 3: Установите и запустите игру</h3>
                    <p className="text-muted-foreground">
                      Нажмите кнопку "Играть" в лаунчере. Игра автоматически скачает необходимые файлы и запустится.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-blue-500/5 border-blue-500/20">
              <div className="flex gap-3">
                <Icon name="Info" size={24} className="text-blue-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Системные требования</h4>
                  <p className="text-sm text-muted-foreground">
                    Минимум: Intel Core i3-3210 / AMD A8-7600, 4GB RAM, Intel HD 4000, 1GB свободного места
                  </p>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'mods':
        return (
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Моды для Minecraft</h1>
            <p className="text-lg text-muted-foreground">
              Моды позволяют добавить новый контент, механики и возможности в игру.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Wrench" size={24} className="text-primary" />
                  Minecraft Forge
                </h3>
                <p className="text-muted-foreground mb-4">
                  Самый популярный загрузчик модов с большой библиотекой доступных модификаций.
                </p>
                <Button className="w-full">
                  Скачать Forge
                  <Icon name="ExternalLink" size={16} className="ml-2" />
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Zap" size={24} className="text-primary" />
                  Fabric
                </h3>
                <p className="text-muted-foreground mb-4">
                  Легковесный и быстрый загрузчик модов для современных версий игры.
                </p>
                <Button className="w-full">
                  Скачать Fabric
                  <Icon name="ExternalLink" size={16} className="ml-2" />
                </Button>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Как установить моды</h3>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-semibold text-sm">1</span>
                  <span>Установите Forge или Fabric модлоадер</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-semibold text-sm">2</span>
                  <span>Найдите папку .minecraft на вашем компьютере</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-semibold text-sm">3</span>
                  <span>Создайте папку "mods" если её нет</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-semibold text-sm">4</span>
                  <span>Скопируйте .jar файлы модов в папку mods</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-semibold text-sm">5</span>
                  <span>Запустите игру с профилем Forge/Fabric</span>
                </li>
              </ol>
            </Card>

            <Card className="p-6 bg-amber-500/5 border-amber-500/20">
              <div className="flex gap-3">
                <Icon name="AlertTriangle" size={24} className="text-amber-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Внимание</h4>
                  <p className="text-sm text-muted-foreground">
                    Скачивайте моды только с проверенных источников: CurseForge, Modrinth. Проверяйте совместимость версий.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        );

      case 'faq':
        return (
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h1>
            <p className="text-lg text-muted-foreground">
              Ответы на самые популярные вопросы о Minecraft.
            </p>

            <Accordion type="single" collapsible className="space-y-2">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Icon name="MessageCircle" size={24} className="text-primary" />
                Не нашли ответ?
              </h3>
              <p className="text-muted-foreground mb-4">
                Присоединяйтесь к нашему сообществу и задайте вопрос там.
              </p>
              <Button>
                Перейти в сообщество
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </Card>
          </div>
        );

      case 'community':
        return (
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Сообщество</h1>
            <p className="text-lg text-muted-foreground">
              Присоединяйтесь к миллионам игроков по всему миру.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-6 hover:border-primary/50 transition-colors cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/10 rounded-lg p-3">
                    <Icon name="MessageSquare" size={32} className="text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Discord</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Общайтесь с игроками в реальном времени, находите команду для игры.
                    </p>
                    <Button variant="outline" size="sm">
                      Присоединиться
                      <Icon name="ExternalLink" size={14} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:border-primary/50 transition-colors cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/10 rounded-lg p-3">
                    <Icon name="MessageCircle" size={32} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Reddit</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Делитесь постройками, обсуждайте обновления и находите идеи.
                    </p>
                    <Button variant="outline" size="sm">
                      Посетить
                      <Icon name="ExternalLink" size={14} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:border-primary/50 transition-colors cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="bg-red-500/10 rounded-lg p-3">
                    <Icon name="Youtube" size={32} className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">YouTube</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Смотрите туториалы, летсплеи и обзоры от популярных авторов.
                    </p>
                    <Button variant="outline" size="sm">
                      Смотреть
                      <Icon name="ExternalLink" size={14} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:border-primary/50 transition-colors cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/10 rounded-lg p-3">
                    <Icon name="Users" size={32} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Форумы</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Официальные форумы Minecraft для детальных обсуждений.
                    </p>
                    <Button variant="outline" size="sm">
                      Открыть
                      <Icon name="ExternalLink" size={14} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Правила сообщества</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <Icon name="Shield" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Будьте вежливы и уважительны к другим участникам</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="Shield" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Не используйте нецензурную лексику и оскорбления</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="Shield" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Не размещайте спам и рекламу без разрешения</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="Shield" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span>Помогайте новичкам и делитесь знаниями</span>
                </li>
              </ul>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <div className="flex">
        <aside className="hidden md:flex flex-col w-64 border-r bg-sidebar min-h-screen sticky top-0">
          <div className="p-6 border-b">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <Icon name="Box" size={20} className="text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">Minecraft</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Документация</p>
          </div>

          <nav className="flex-1 p-4">
            <div className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeSection === section.id
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                  }`}
                >
                  <Icon name={section.icon} size={20} />
                  <span>{section.label}</span>
                </button>
              ))}
            </div>
          </nav>

          <div className="p-4 border-t">
            <Button
              onClick={toggleTheme}
              variant="outline"
              size="sm"
              className="w-full"
            >
              <Icon name={isDark ? 'Sun' : 'Moon'} size={16} className="mr-2" />
              {isDark ? 'Светлая' : 'Тёмная'}
            </Button>
          </div>
        </aside>

        <main className="flex-1">
          <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
            <div className="container max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3 md:hidden">
                <Icon name="Box" size={24} className="text-primary" />
                <span className="font-bold">Minecraft Docs</span>
              </div>
              <div className="hidden md:block">
                <span className="text-sm text-muted-foreground">
                  {sections.find(s => s.id === activeSection)?.label}
                </span>
              </div>
              <Button
                onClick={toggleTheme}
                variant="ghost"
                size="icon"
                className="md:hidden"
              >
                <Icon name={isDark ? 'Sun' : 'Moon'} size={20} />
              </Button>
            </div>
          </header>

          <div className="container max-w-4xl mx-auto px-6 py-8 md:py-12">
            {renderContent()}
          </div>

          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t p-4">
            <div className="flex gap-2 overflow-x-auto">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  variant={activeSection === section.id ? 'default' : 'outline'}
                  size="sm"
                  className="flex-shrink-0"
                >
                  <Icon name={section.icon} size={16} className="mr-2" />
                  {section.label}
                </Button>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;