﻿




CREATE TABLE Расположение (
 primaryKey UUID NOT NULL,
 Адрес VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Контроллер (
 primaryKey UUID NOT NULL,
 IdКонтроллера INT NULL,
 Модель VARCHAR(255) NULL,
 Сенсоры UUID NOT NULL,
 Серверная UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должность (
 primaryKey UUID NOT NULL,
 IdДолжности INT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудник (
 primaryKey UUID NOT NULL,
 IdСотрудника INT NULL,
 Имя VARCHAR(255) NULL,
 Отчество VARCHAR(255) NULL,
 Фамилия VARCHAR(255) NULL,
 Должность UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сенсоры (
 primaryKey UUID NOT NULL,
 IdДатчика INT NULL,
 Тип VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ОтчетОСервере (
 primaryKey UUID NOT NULL,
 Режим VARCHAR(17) NULL,
 Расположение UUID NOT NULL,
 Серверная UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Серверная (
 primaryKey UUID NOT NULL,
 IDСерверной INT NULL,
 IP VARCHAR(255) NULL,
 Настройки VARCHAR(255) NULL,
 Порт INT NULL,
 Протокол VARCHAR(255) NULL,
 Сотрудник UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Контроллер ADD CONSTRAINT FK8ecdffff752aa5d6300b18c91c56008b503946a2 FOREIGN KEY (Сенсоры) REFERENCES Сенсоры; 
CREATE INDEX Index8ecdffff752aa5d6300b18c91c56008b503946a2 on Контроллер (Сенсоры); 

 ALTER TABLE Контроллер ADD CONSTRAINT FKe5eed7dd6008d00561568501caed78df1452db5d FOREIGN KEY (Серверная) REFERENCES Серверная; 
CREATE INDEX Indexe5eed7dd6008d00561568501caed78df1452db5d on Контроллер (Серверная); 

 ALTER TABLE Сотрудник ADD CONSTRAINT FK52e78a286299ec0faa67b4f751a6cda2dec1a57a FOREIGN KEY (Должность) REFERENCES Должность; 
CREATE INDEX Index52e78a286299ec0faa67b4f751a6cda2dec1a57a on Сотрудник (Должность); 

 ALTER TABLE ОтчетОСервере ADD CONSTRAINT FKb33db21ab1f602e07439412d9641d5ad37e13521 FOREIGN KEY (Расположение) REFERENCES Расположение; 
CREATE INDEX Indexb33db21ab1f602e07439412d9641d5ad37e13521 on ОтчетОСервере (Расположение); 

 ALTER TABLE ОтчетОСервере ADD CONSTRAINT FK5b326f46bda4cb9f7d0a7a7f8abaa12275adee1a FOREIGN KEY (Серверная) REFERENCES Серверная; 
CREATE INDEX Index5b326f46bda4cb9f7d0a7a7f8abaa12275adee1a on ОтчетОСервере (Серверная); 

 ALTER TABLE Серверная ADD CONSTRAINT FKd08ee200c5b5826d72f3c1965be2110900a9e31a FOREIGN KEY (Сотрудник) REFERENCES Сотрудник; 
CREATE INDEX Indexd08ee200c5b5826d72f3c1965be2110900a9e31a on Серверная (Сотрудник); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

