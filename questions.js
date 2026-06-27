const QUESTIONS = {
  "choice": [
    {
      "type": "choice",
      "question": "（  ）是对数据库中全部数据的逻辑结构和特征的描述。",
      "answer": "A",
      "options": [
        "模式",
        "外模式",
        "内模式",
        "视图"
      ]
    },
    {
      "type": "choice",
      "question": "（  ）是对数据库用户能够看见和使用的局部数据的逻辑结构和特征的描述",
      "answer": "B",
      "options": [
        "模式",
        "外模式",
        "内模式",
        "概念模式"
      ]
    },
    {
      "type": "choice",
      "question": "数据库中的记录是按照B+树存储还是按hash方法存储，这一特征在数据库的（  ）中定义。",
      "answer": "C",
      "options": [
        "模式",
        "外模式",
        "内模式",
        "子模式"
      ]
    },
    {
      "type": "choice",
      "question": "概念模型的表示方法有很多种，其中最著名的是（  ）。",
      "answer": "B",
      "options": [
        "关系模型",
        "E-R模型",
        "层次模型",
        "网状模型"
      ]
    },
    {
      "type": "choice",
      "question": "数据库的概念模型（  ）",
      "answer": "D",
      "options": [
        "独立于计算机硬件，依赖于 DBMS",
        "依赖于计算机硬件，独立于 DBMS",
        "依赖于计算机硬件和 DBMS",
        "独立于计算机硬件和 DBMS"
      ]
    },
    {
      "type": "choice",
      "question": "下列关系代数操作中复杂度最高的是（  ）。",
      "answer": "C",
      "options": [
        "投影",
        "连接",
        "选择",
        "交"
      ]
    },
    {
      "type": "choice",
      "question": "若关系R和S的元组个数分别为m和n，则R∪S的元组个数为（  ）。",
      "answer": "B",
      "options": [
        "m+n",
        "小于或等于m+n",
        "大于m",
        "大于n"
      ]
    },
    {
      "type": "choice",
      "question": "已知关系R1和R2进行关系运算后得到S，则S是（  ）",
      "answer": "B",
      "options": [
        "一行记录",
        "一个关系",
        "一个确定值",
        "一个数组"
      ]
    },
    {
      "type": "choice",
      "question": "若关系R和S的元组个数分别为m和n，则R-S的元组个数是（  ）。",
      "answer": "D",
      "options": [
        "m-n",
        "小于m",
        "小于n",
        "小于等于m"
      ]
    },
    {
      "type": "choice",
      "question": "下列关系代数操作中最费时的是（  ）。",
      "answer": "B",
      "options": [
        "投影",
        "笛卡尔积",
        "选择",
        "交"
      ]
    },
    {
      "type": "choice",
      "question": "在信息系统的设计中，普遍采用的是基于（  ）的系统设计方法。",
      "answer": "B",
      "options": [
        "BCNF",
        "3NF",
        "2NF",
        "4NF"
      ]
    },
    {
      "type": "choice",
      "question": "在函数依赖范畴内，（  ）是关系模式能够达到的最高规范化程度。",
      "answer": "C",
      "options": [
        "3NF",
        "4NF",
        "BCNF",
        "5NF"
      ]
    },
    {
      "type": "choice",
      "question": "下列说法中错误的是（  ）",
      "answer": "C",
      "options": [
        "模式分解是关系规范化的基本方法",
        "实际应用中，数据库设计一般应达到3NF",
        "若一个关系模式符合2NF，则它必然也符合3NF",
        "实际应用中常常为了提高查询效率而允许数据库中存在一定的数据冗余"
      ]
    },
    {
      "type": "choice",
      "question": "关系数据库中由数据冗余导致的异常不包括（  ）。",
      "answer": "D",
      "options": [
        "插入异常",
        "删除异常",
        "修改异常",
        "查询异常"
      ]
    },
    {
      "type": "choice",
      "question": "设关系模式R(XYZ)，已知存在函数依赖X->Y和Y->Z，则可作为R的候选键的是（  ）。",
      "answer": "A",
      "options": [
        "X",
        "Y",
        "Z",
        "已知条件无法判断候选键"
      ]
    },
    {
      "type": "choice",
      "question": "（  ）是数据库系统的核心，是位于用户和操作系统之间的一层数据管理软件。",
      "answer": "A",
      "options": [
        "DBMS",
        "DBS",
        "DBA",
        "DDL"
      ]
    },
    {
      "type": "choice",
      "question": "数据库管理系统的英文缩写是（  ）。",
      "answer": "A",
      "options": [
        "DBMS",
        "DBA",
        "DBS",
        "MIS"
      ]
    },
    {
      "type": "choice",
      "question": "下列不是关系数据库产品的是（  ）。",
      "answer": "D",
      "options": [
        "SQL Server",
        "Oracle",
        "MySQL",
        "IMS"
      ]
    },
    {
      "type": "choice",
      "question": "关于索引，下列说法错误的是（  ）。",
      "answer": "C",
      "options": [
        "索引可以加快数据的检索速度",
        "建立索引会牺牲一定的系统性能",
        "在一张表上可以建立多个聚集索引",
        "在一张表上可以建立多个非聚集索引"
      ]
    },
    {
      "type": "choice",
      "question": "关于视图，下列说法错误的是（  ）。",
      "answer": "B",
      "options": [
        "视图是虚拟表",
        "数据可以存放在视图中",
        "在视图上做查询与在基本表上做查询方法是相同的",
        "视图可以建立在多个基本表的基础之上"
      ]
    },
    {
      "type": "choice",
      "question": "下面哪种情况下适合建立索引（  ）。",
      "answer": "C",
      "options": [
        "经常进行插入操作的表",
        "行数较小的表",
        "更新少而数据量大的表",
        "表中存在大量重复值的列"
      ]
    },
    {
      "type": "choice",
      "question": "关于存储过程与触发器，下列说法正确的是（  ）。",
      "answer": "B",
      "options": [
        "存储过程是存储在客户端的SQL程序",
        "触发器是一种特殊的存储过程",
        "触发器可通过其名字被用户直接调用       D .存储过程是一种特殊的触发器"
      ]
    },
    {
      "type": "choice",
      "question": "关于视图，下列说法正确的是（  ）",
      "answer": "A",
      "options": [
        "建立视图语句的关键部分是查询语句",
        "若导出某视图的数据库表被删除了，该视图不受任何影响",
        "视图一旦建立，就不能被删除",
        "当某一视图被删除后，导出该视图的数据库表将会受到影响"
      ]
    },
    {
      "type": "choice",
      "question": "数据库应用程序开发中，需求分析阶段的主要目的是（  ）。",
      "answer": "A",
      "options": [
        "回答“做什么”的问题",
        "回答“怎么做”的问题",
        "建立逻辑数据模型",
        "建立最佳物理存储结构"
      ]
    },
    {
      "type": "choice",
      "question": "在结构化方法中，用数据流程图(DFD)作为描述工具的软件开发阶段是（  ）",
      "answer": "B",
      "options": [
        "可行性分析",
        "需求分析",
        "概念设计",
        "物理设计"
      ]
    },
    {
      "type": "choice",
      "question": "实体与实体的联系，反映在数据上是（  ）之间的联系",
      "answer": "C",
      "options": [
        "文件",
        "集合",
        "记录",
        "结构"
      ]
    },
    {
      "type": "choice",
      "question": "关于主键约束，下列说法正确的是（  ）。",
      "answer": "A",
      "options": [
        "主键值不为空，也不允许出现重复",
        "主键值不为空，但允许出现重复",
        "主键值允许空，但不允许出现重复",
        "主键值允许空，也允许出现重复"
      ]
    },
    {
      "type": "choice",
      "question": "关于参照完整性，下列说法中错误的是（  ）。",
      "answer": "A",
      "options": [
        "外键属性取值不能为空",
        "关系中不允许引用不存在的实体",
        "可以通过定义外键实现",
        "外键属性取值允许为空"
      ]
    },
    {
      "type": "choice",
      "question": "在关系数据库中，\"关系中不允许出现相同的元组\"的约束可以通过定义（  ）实现的",
      "answer": "B",
      "options": [
        "超键",
        "主键",
        "外键",
        "check约束"
      ]
    },
    {
      "type": "choice",
      "question": "事务必须满足的四个原则是（  ），一致性，隔离性，持久性。",
      "answer": "A",
      "options": [
        "原子性",
        "完整性",
        "安全性",
        "正确性"
      ]
    },
    {
      "type": "choice",
      "question": "事务并发执行时，每个事务不必关心其他事务，如同在单用户环境下执行一样，这个性质称为事务的（  ）",
      "answer": "D",
      "options": [
        "持久性",
        "一致性",
        "独立性",
        "隔离性"
      ]
    },
    {
      "type": "choice",
      "question": "一个事务中所有对DB的操作是一个不可分割的整体，这个性质称为（  ）。",
      "answer": "D",
      "options": [
        "完整性",
        "一致性",
        "隔离性",
        "原子性"
      ]
    },
    {
      "type": "choice",
      "question": "SQL中，下列涉及空值的操作，不正确的是（  ）。",
      "answer": "A",
      "options": [
        "AGE=NULL",
        "AGE IS NOT NULL",
        "AGE IS NULL",
        "NOT(AGE IS NULL)"
      ]
    },
    {
      "type": "choice",
      "question": "在 SQL 语句中，与 X BETWEEN 20 AND 30 等价的表达式是（  ）",
      "answer": "D",
      "options": [
        "X>=20 AND X<30",
        "X>20 AND X<30",
        "X>20 AND X<=30",
        "X>=20 AND X<=30"
      ]
    },
    {
      "type": "choice",
      "question": "关于SQL，下列说法正确的是（  ）。",
      "answer": "D",
      "options": [
        "是过程化语言",
        "是机器语言",
        "是面向对象语言",
        "是非过程化语言"
      ]
    },
    {
      "type": "choice",
      "question": "当SELECT语句返回的结果是一个集合时，可以借助（  ）对其中的单行记录进行处理。",
      "answer": "B",
      "options": [
        "锁",
        "游标",
        "索引       D .存储过程"
      ]
    },
    {
      "type": "choice",
      "question": "在SELECT语句中，能够实现对查询结果排序的操作是（  ）",
      "answer": "B",
      "options": [
        "COUNT",
        "ORDER BY",
        "GROUP BY",
        "INDEX"
      ]
    },
    {
      "type": "choice",
      "question": "下列关于数据库索引的说法，错误的是（  ）",
      "answer": "C",
      "options": [
        "索引可以显著提高查询效率",
        "索引会降低插入、更新、删除数据的性能",
        "一个表只能创建一个索引",
        "主键列默认会自动创建索引"
      ]
    },
    {
      "type": "choice",
      "question": "下列关于数据库视图的说法，正确的是（  ）",
      "answer": "B",
      "options": [
        "视图中实际存储了真实数据",
        "视图可以简化复杂查询，隐藏部分字段",
        "对视图的查询一定比直接查表更快",
        "任何视图都可以随意执行 UPDATE 操作"
      ]
    },
    {
      "type": "choice",
      "question": "下列操作中，无法直接通过视图实现的是（  ）",
      "answer": "C",
      "options": [
        "查询数据",
        "限制用户只能查看部分列",
        "永久存储大量原始数据",
        "基于多张表创建一个虚拟表"
      ]
    },
    {
      "type": "choice",
      "question": "下列关于存储过程的描述，错误的是（  ）",
      "answer": "C",
      "options": [
        "存储过程编译后可重复执行，提高效率",
        "存储过程可以封装多条 SQL 语句",
        "存储过程必须每次执行都重新编译",
        "存储过程可以接收输入参数"
      ]
    },
    {
      "type": "choice",
      "question": "使用存储过程的主要优点不包括（  ）",
      "answer": "C",
      "options": [
        "减少网络传输",
        "简化复杂业务逻辑调用",
        "永久保存业务数据",
        "提高代码复用性"
      ]
    },
    {
      "type": "choice",
      "question": "下列关于触发器的描述，正确的是（  ）",
      "answer": "B",
      "options": [
        "触发器需要手动调用才能执行",
        "触发器由增、删、改操作自动触发",
        "触发器只能作用于查询语句",
        "触发器会永久存储业务数据"
      ]
    },
    {
      "type": "choice",
      "question": "下列操作中，通常不能触发触发器的是（  ）",
      "answer": "D",
      "options": [
        "INSERT",
        "UPDATE",
        "DELETE",
        "SELECT"
      ]
    },
    {
      "type": "choice",
      "question": "满足第一范式（1NF）的核心要求是（  ）",
      "answer": "B",
      "options": [
        "消除非主属性对主键的部分函数依赖",
        "每个属性都是不可再分的原子值",
        "消除非主属性对主键的传递函数依赖",
        "消除多值依赖"
      ]
    },
    {
      "type": "choice",
      "question": "下列关于第三范式（3NF）的说法，正确的是（  ）",
      "answer": "B",
      "options": [
        "允许存在部分依赖",
        "不允许非主属性之间存在传递依赖",
        "必须先满足 BCNF 才能满足 3NF",
        "字段可以包含多个值用逗号分隔"
      ]
    }
  ],
  "judge": [
    {
      "type": "judge",
      "question": "数据库管理系统是为数据库的建立、使用和维护而配置的系统软件。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "内模式描述数据库用户能够看见和使用的局部数据的逻辑结构和特征。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "外模式描述数据库用户能够看见和使用的局部数据的逻辑结构和特征。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "数据库的概念模型独立于计算机硬件和 DBMS。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "数据库的概念模型与DBMS相关。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "ER图是在业务流程分析的基础上，描述实际数据流动和处理过程的图形表示法。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "ER图用于构建数据库的概念模型。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "在信息系统的设计中，普遍采用的是基于2NF的系统设计方法。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "在信息系统的设计中，普遍采用的是基于3NF的系统设计方法。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "第二范式 (2NF) 需要消除非主属性对主键的传递依赖。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "为了节约存储空间，关系型数据库中不允许存在数据冗余。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "关系型数据库中允许存在一定的数据冗余，适当冗余可以提升查询效率。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "DBS指的是数据库管理系统。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "DBMS指的时数据库管理系统。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "数据库管理员的英文缩写是DBA。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "数据库管理员的英文缩写是ADMIN。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "MySQL服务的默认端口号是8080。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "MySQL服务的默认端口号是3306。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "经常进行增删改操作的表不适合建立索引。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "经常进行增删改操作的表适合建立索引。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "存储过程是存储在客户端的SQL程序。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "存储过程是存储在数据库服务器端的 SQL 程序，可被重复调用执行。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "触发器可通过其名字被用户直接调用。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "触发器能够被插入、删除和修改操作触发执行。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "数据库需求分析的目的是建立数据的概念模型。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "视图是虚拟表，因此不会实际存储数据。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "视图可以独立于基本表单独存在。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "索引可以加快查询速度，也能提升增删改效率。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "一张表只能创建一个唯一索引。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "一张表可以创建多个唯一索引。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "数据库三大完整性包括实体完整性、参照完整性、用户自定义完整性。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "主键值不为空，也不允许出现重复值。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "外键可以实现参照完整性。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "将年龄字段限制在某个取值范围，应定义UNIQUE约束。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "将年龄字段限制在某个取值范围，应定义CHECK约束。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "UNIQUE约束用于在非主键列限定取值的唯一性。。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "主键约束和唯一约束都不允许字段重复。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "选择是对一个关系进行水平分割。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "投影是对一个关系进行垂直分割。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "自然连接会自动判断两个表中所有同名的列，然后在这些列上做等值连接，最后结果中只保留一列。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "笛卡尔积是两张表无条件连接的结果。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "数据库中的空值表示空字符。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "数据库中的空值表示0。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "CHAR用于存储可变长字符串。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "CHAR用于存储固定长度字符串。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "事务的四大特性简称为 ACID。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "事务必须满足原子性。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "一个事务中所有对DB的操作是一个不可分割的整体，这个性质称为原子性",
      "answer": true
    },
    {
      "type": "judge",
      "question": "当多个事务同时读取或修改相同的数据库资源时，可以采用封锁进行并发控制。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "SQL语言是一种非过程性语言。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "当SELECT语句返回的结果是一个集合时，可以借助游标对其中的单行记录进行处理。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "SELECT子句对应于关系代数中的选择操作。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "FROM子句对应于关系代数中的笛卡尔积操作。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "WHERE子句对应于关系代数中的投影操作。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "删除数据库中已存在的表t，应执行delete t。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "删除数据库中已存在的视图t，应执行delete t。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "DELETE 语句删除表数据，DROP 语句删除整张数据表。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "SQL 语言分为数据定义、数据操纵、数据控制等部分。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "SQL语言中的数据控制用于对表数据进行增删改查操作。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "SQL语言中的数据操纵用于对表数据进行增删改查操作。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "DISTINCT 关键字用于去除查询结果重复数据。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "UNIQUE 关键字用于去除查询结果重复数据。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "GROUP BY 用于对查询结果进行分组统计。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "聚合函数 SUM、AVG 会自动忽略 NULL 值。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "聚合函数COUNT会自动忽略NULL值。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "DROP TABLE 仅删除表中数据，不删除表结构。",
      "answer": true
    },
    {
      "type": "judge",
      "question": "ORDER BY 默认排序为降序（DESC）。",
      "answer": false
    },
    {
      "type": "judge",
      "question": "ORDER BY 默认排序为升序（ASC）。",
      "answer": true
    }
  ],
  "design": [],
  "comprehensive": [
    {
      "type": "choice",
      "question": "满足第二范式（2NF）的前提是已经满足第一范式，并且在此基础上必须满足（  ）",
      "answer": "A、已知MySQL服务器上的商品销售数据库（sales）中包括三张表：\n员工信息表employee（eid，ename，age，sex，tel），存放员工的工号、姓名、年龄、性别以及电话信息； （eid为主键，年龄字段为整型、其余均为字符型）\n商品信息表goods（gid，gname，type，price），存放商品的商品编号，商品名称，类别以及价格；（gid为主键，价格字段为money型，其余均为字符型）\n销售信息表eg（eid，gid，quantity，saledate），存放员工工号、商品编号，销售数量和销售时间信息；（eid、gid和saledate为联合主键，且eid为外键、gid为外键。销售时间字段为datetime类型，其余均为字符型）\n写出创建sales数据库的SQL语句\ncreate database sales\n写出创建eg表的SQL语句（数据类型由学生自定义）\nCREATE TABLE eg\n( eid VARCHAR(30)，\ngid VARCHAR(30) ,\nquantity VARCHAR(20),\nsaledate DATETIME,\nPRIMARY KEY (eid, gid,saledate),\nFOREIGN KEY (eid) REFERENCES employee(eid),\nFOREIGN KEY (gid) REFERENCES goods(gid) )\n向商品信息表中插入一条记录（商品编号为‘BX001’，商品名称为‘蓝牙耳机’，商品类别为‘数码配件’，价格为299.00），写出SQL语句。\ninsert into goods values (‘BX001’,’蓝牙耳机’，‘数码配件’，299.00)\n删除工号为‘1001’的员工的记录，写出SQL语句。\ndelete from employee where eid=‘1001’\n将工号为‘1001’的员工的电话修改为‘13856789012’，写出SQL语句。\nupdate employee\nset tel=’13856789012’\nwhere eid=’1001’\n查询年龄在40到50岁之间（含40,50）的员工信息，按年龄由小到大排序；写出SQL语句。\nselect  *\nfrom employee\nwhere age between 40 and 50\norder by age asc ;\n查询2017年10月1日的销售记录，包括员工工号，姓名，商品编号，商品名；写出SQL语句。\nselect employee.eid, ename, goods.gid,gname\nfrom employee,goods,eg\nwhere employee.eid=eg.eid and goods.gid=eg.gid and saledate='2017-10-1' ;\n查询所有姓李的员工的工号，姓名以及电话；写出SQL语句。\nselect eid, ename,tel\nfrom employee\nwhere ename like '李%' ;\n创建存储过程，统计各类别商品的平均价格；写出SQL语句。\ndelimiter $$\ncreate procedure myproc\nbegin\nselect type,avg(price)\nfrom goods\ngroup by type ;\nend $$\ndelimiter ;\n查询员工李华销售出的商品的总数量；写出SQL语句。\nselect sum(quantity)\nfrom employee,eg\nwhere employee.eid=eg.eid and ename='李华' ;\n查询在2017年10月1日销售业绩为0的员工的工号和姓名；写出SQL语句。\nselect eid, ename\nfrom employee\nwhere eid not in ( select eid\nfrom eg\nwhere saledate='2017-10-1');\n利用关系代数表达式查询所有工号为1001的员工所销售商品的名称以及销售时间。（关系代数操作用文字描述即可）\ngoods表与eg表做自然连接操作，然后基于条件eid=‘1001’进行选择操作，最后在gname和saledate属性做投影操作。\n、已知MySQL服务器上的图书管理数据库（book_lib）中包括三张表：\n学生信息表student（sid，sname，age，sex，major），存储学生的学号、姓名、年龄、性别以及专业名称；（gid为主键，年龄字段为整型，其余字段均为字符型）\n图书信息表book（bid，bname，author，press，price，ISBN），存储图书的编号、书名、作者、出版社、价格和ISBN号；（bid为主键，价格字段为整型，其余字段均为字符型）\n图书借阅记录表sb（sid，bid，borrowdate），存储学号、图书编号、借阅日期；（sid和bid为联合主键，且sid为外键、bid为外键。学号与图书编号为字符型，借阅日期为日期型）\n写出创建book_lib数据库的SQL语句\ncreate database book_lib\n写出创建sb表的SQL语句（数据类型由学生自定义）\ncreate table sb\n（ sid char（10），\nbid  char（20），\nborrowdate  datetime，\nprimary key（sid，bid），\nforeign key（sid）references student（sid），\nforeign key（bid）references book（bid））\n向学生信息表中插入一条学生记录（学号为‘1001’，姓名为‘王刚’，年龄为20，性别为‘男’，专业为‘软件工程’）。写出SQL语句。\ninset into student values(‘1001’, ‘王刚’, 20, ‘男’, ‘软件工程’)\n删除学号为‘1001’的学生的所有借阅记录。写出SQL语句。\ndelete from sb where sid=‘1001’\n将学号为‘1001’的学生的专业修改为‘人工智能’，写出SQL语句。\nupdate student\nset major=’人工智能’\nwhere sid=‘1001’\n查询年龄在20到25岁（含20,25）之间的学生信息，写出SQL语句。\nselect *\nfrom student\nwhere age between 20 and 25;\n查询清华大学出版社出版的书籍的图书编号，图书名和价格，按价格由低到高排序。写出SQL语句。\nselect bid,bname,price\nfrom book\nwhere press='清华大学出版社'\norder by price;\n查询所有姓李的学生的姓名、年龄、性别和专业。写出SQL语句。\nselect sname,age,sex,major\nfrom student\nwhere sname like '李%';\n利用SQL查询借阅过数据结构书籍的学生的姓名和借阅时间。写出SQL语句。\nselect sname,borrowdate\nfrom student,book,sb\nwhere student.sid=sb.sid and book.bid=sb.bid and bname='数据结构';\n利用SQL创建一个存储过程，统计各专业的学生人数（存储过程名称自定义）。写出SQL语句。\ndelimiter $$\ncreate procedure myprocedure\nbegin\nselect major, count(sid)\nfrom student\ngroup by major;\nend $$\ndelimiter ;\n利用SQL查询年龄大于平均年龄的学生的信息。写出SQL语句。\nselect *\nfrom student\nwhere age>( select avg(age)\nfrom student);\n利用关系代数表达式查询年龄大于等于30岁的学生借阅的图书书名。（关系代数操作用文字描述即可）\nstudent、book、sb三张表做自然连接，继而基于条件age>=30进行选择操作，最后在bname列做投影操作。\n、已知MySQL服务器上的教学管理数据库（teachingdb）中包括三张表：\n教师信息表teacher（tid，tname，age，sex，title），存储教师的工号、姓名、年龄、性别以及职称信息； （tid为主键，年龄字段为整型、其余均为字符型）\n课程信息表course（cid，cname），存储课程的课程号和课程名称；（cid为主键，字段均为字符型）\n授课信息表tc（tid，cid），存储教师工号、课程号 （tid和cid为联合主键，且tid和cid均为外键。字段均为字符型）\n写出创建teachingdb数据库的SQL语句\ncreate database teachingdb\n写出创建tc表的SQL语句（数据类型由学生自定义）\ncreate table tc\n（ tid char（10），\ncid  char（20），\nprimary key（tid，cid），\nforeign key（tid）references teacher（tid），\nforeign key（cid）references course（cid））\n向课程信息表中插入一条课程记录（课程号为‘C001’，课程名为‘数据库’）。写出SQL语句。\ninsert into course values（‘C001’，’数据库’）\n删除工号为‘1001’的教师的所有授课记录。写出SQL语句。\ndelete from tc where tid=’1001’\n将工号为‘t001’的教师的职称修改为‘教授’，写出SQL语句。\nupdate teacher\nset title=’教授’\nwhere tid=‘1001’\n（3） 查询年龄在30到40岁之间（含30,40）的教师信息，按年龄由小到大排序。写出SQL语句。\nselect *\nfrom teacher\nwhere age between 30 and 40\norder by age asc;\n（4） 查询所有姓张的教师的姓名、年龄和性别。写出SQL语句。\nselect  tname,age,sex\nfrom teacher\nwhere tname like '张%';\n（5） 查询讲授“数据库”课程的教师的工号。写出SQL语句。\nselect  tid\nfrom course, tc\nwhere  course.cid=tc.cid and cname='数据库';\n（6） 创建存储过程，统计各个专业技术职称的教师人数。写出SQL语句。\ndelimiter $$\ncreate procedure myprocedure\nbegin\nselect title,count(tid)\nfrom teacher\ngroup by title;\nend $$\ndelimiter ;\n（7） 查询教师李华的授课数量。写出SQL语句。\nselect count(cid)\nfrom teacher,tc\nwhere teacher.tid=tc.tid and tname='李华';\n（8） 查询年龄小于所有教师平均年龄的男性教师的工号与职称。写出SQL语句。\nselect tid,title\nfrom teacher\nwhere sex='男' and age<( select avg(age)\nfrom teacher);\n（9） 利用关系代数表达式查询所有职称为教授的教师讲授课程的课程名称。（关系代数操作用文字描述即可）\nteacher，course和tc三张表做自然连接，继而基于title=’教授’条件做选择，最后在cname列做投影。\n、已知MySQL服务器上的网上图书销售系统数据库（booksales）中包括三张表：\n客户信息表customer（cid，cname，email，tel，address），存放客户账号、姓名、电子邮箱、电话以及地址；  （cid为主键，所有字段均为字符型）\n图书信息表book（bid，bname，author，press，price，ISBN），存放图书编号、书名、作者、出版社、价格和ISBN号；  （bid为主键，价格字段为整型，其他字段均为字符型）\n图书购买记录表cb（cid，bid，shoppingdate，quantity），存放客户账号、图书编号、购买日期、数量。  （cid、bid和shoppingdate为联合主键。且cid和bid均为外键，购买日期为日期型，数量为整型，其他字段均为字符型）\n写出创建booksales数据库的SQL语句\ncreate database booksales\n写出创建cb表的SQL语句（数据类型由学生自定义）\ncreate table cb\n（ cid char（10），\nbid  char（20），\nshoppingdate  datetime，\nquantity  int，\nprimary key（cid，bid），\nforeign key（cid）references customer（cid），\nforeign key（bid）references book（bid））\n向客户信息表中插入一条客户记录（客户账号为‘C001’，姓名为‘王刚’）。写出SQL语句。\ninsert into customer( cid, cname) values (‘C001’, ‘王刚’)\n删除账号为‘1001’的客户的所有图书购买记录。写出SQL语句。\ndelete from cb where cid=’1001’\n将图书编号为‘B001’的图书的价格修改为32，写出SQL语句。\nupdate book\nset price=32\nwhere bid=‘B001’\n（3）查询价格在50元到100元（含50、100元）之间的图书的书名、作者与价格。写出SQL语句。\nselect bname,author,price\nfrom book\nwhere price between 50 and 100;\n（4）查询购买了编号为b001的图书的客户的账号和购买日期，按购买日期由先到后排序；写出SQL语句。\nselect cid,shoppingdate\nfrom cb\nwhere bid='b001'\norder by shoppingdate asc;\n（5）查询所有地址中含有“杨浦”关键字的客户的姓名、电话和地址；写出SQL语句。\nselect cname,tel,address\nfrom customer\nwhere address like '%杨浦%';\n（6）查询一次购买了超过50本《数据库应用技术》图书的客户的姓名；写出SQL语句。\nselect cname\nfrom customer,book,cb\nwhere customer.cid=cb.cid and book.bid=cb.bid\nand bname='数据库应用技术' and quantity>50;\n创建一个视图，统计各出版社出版的图书的平均价格（视图名称自行定义）；写出SQL语句。\ncreate view myview\nas\nselect press, avg(price) as avgprice\nfrom book\ngroup by press;\n（8）查询没有购买过图书的客户的姓名和电话；写出SQL语句\nselect cname,tel\nfrom customer\nwhere cid not in ( select cid\nfrom cb);\n利用关系代数表达式查询购买了《数据库应用技术》的客户姓名。（关系代数操作用文字描述即可）\ncustomer，book和cb三张表做自然连接，继而基于bname=’数据库应用技术’条件做选择，最后在cname列做投影。\n、已知MySQL服务器上的教学管理数据库（teachingdb）中包括三张表：\n学生信息表student（sid，sname，age，sex，major），存放学生的学号，姓名，年龄，性别以及专业信息；（sid为主键，年龄字段为整型，其余字段均为字符型）\n课程信息表 course（cid，cname），存放课程的课程号和课程名；（cid为主键，所有字段均为字符型）\n选课信息表 sc（sid，cid，score），存放学号、课程号以及成绩；（sid和cid为联合主键。且sid和cid均为外键。成绩字段为整型，其余字段均为字符型）\n写出创建teachingdb数据库的SQL语句\ncreate database teachingdb\n写出创建sc表的SQL语句（数据类型由学生自定义）\ncreate table sc\n（ sid char（10），\ncid  char（20），\nscore int，\nprimary key（sid，cid），\nforeign key（sid）references student（sid），\nforeign key（cid）references course（cid））\n向学生信息表中插入一条学生记录（学号为‘1001’，姓名为‘王刚’，年龄为20，性别为‘男’，专业为‘软件工程’）。写出SQL语句。\ninset into student values(‘1001’, ‘王刚’, 20, ‘男’, ‘软件工程’)\n删除课程号为‘C001’的课程的所有选课记录。写出SQL语句。\ndelete from sc where cid=’1001’\n将学号为‘1001’的学生的专业修改为‘人工智能’，写出SQL语句。\nupdate student\nset major=’人工智能’\nwhere sid=‘1001’\n（3）查询年龄在20到30岁（含20与30）之间的女学生信息。写出SQL语句\nselect *\nfrom student\nwhere sex='女' and age between 20 and 30;\n查询选修了课程号为c001课程的学生的学号和成绩，按成绩由高到低排序。写出SQL语句\nselect sid,score\nfrom sc\nwhere cid='c001'\norder by score desc;\n（5） 查询所有姓名中含有华字的学生的姓名，年龄和性别。写出SQL语句\nselect sname, age, sex\nfrom student\nwhere sname like '%华%';\n（6） 创建视图，统计各门课程考试成绩的最高分。写出SQL语句\ncreate view myview\nas\nselect cid, max(score) as maxscore\nfrom sc\ngroup by cid;\n（7） 查询李华同学选修的所有课程的课程名以及成绩。写出SQL语句\nselect cname, score\nfrom student, course, sc\nwhere student.sid=sc.sid and course.cid=sc.cid and sname='李华';\n（8） 查询没有被选修的课程的课程名。写出SQL语句\nselect cname\nfrom course\nwhere cid not in ( select cid\nfrom sc);\n利用关系代数表达式查询机械电子专业学生选修的课程名。关系代数操作用文字描述即可）\nstudent，course和sc三张表做自然连接，继而基于major=’机械电子’条件做选择，最后在cname列做投影。\n",
      "options": [
        "消除非主属性对主键的部分函数依赖",
        "消除非主属性对主键的传递函数依赖",
        "所有字段都是不可再分的原子值",
        "消除多值依赖"
      ]
    }
  ]
};