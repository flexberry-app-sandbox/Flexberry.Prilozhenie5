package Prilozhenie_5.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Prilozhenie_5.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Должность
 */
@Entity(name = "IISPrilozhenie_5Должность")
@Table(schema = "public", name = "Должность")
public class Dolzhnost {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "IdДолжности")
    private Integer idдолжности;


    public Dolzhnost() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public Integer getIdДолжности() {
      return idдолжности;
    }

    public void setIdДолжности(Integer idдолжности) {
      this.idдолжности = idдолжности;
    }


}