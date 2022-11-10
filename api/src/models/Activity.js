const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define(
    'activity',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 5,
        },
      },
      duration: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      season: {
        // type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
        // defaultValue: 'Other',
        type: DataTypes.STRING,
        validate: {
          isIn: [['Todo el año', 'Verano', 'Otoño', 'Invierno', 'Primavera']],
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
