package Prilozhenie_5.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Prilozhenie_5.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Сенсоры
 */
@Entity(name = "IISPrilozhenie_5Сенсоры")
@Table(schema = "public", name = "Сенсоры")
public class Sensory {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Тип")
    private String тип;

    @Column(name = "IdДатчика")
    private Integer idдатчика;


    public Sensory() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getТип() {
      return тип;
    }

    public void setТип(String тип) {
      this.тип = тип;
    }

    public Integer getIdДатчика() {
      return idдатчика;
    }

    public void setIdДатчика(Integer idдатчика) {
      this.idдатчика = idдатчика;
    }


}